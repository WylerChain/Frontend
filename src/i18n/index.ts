// Configuration file for server components
import { createInstance } from "i18next";
import { Namespace } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, Language, PrefixOptions, DEFAULT_NS } from "./settings";

const initI18next = async (lng: Language, ns: Namespace) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        // NOTE: Type definition is not provided ^ Due to the small impact of any definition, type definition will be postponed for now.
        (language: any, namespace: any) =>
          import(`./languages/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

/**
 * @description Translation data acquisition function for server component
 */
export const getTranslation = async (
  lng: Language,
  ns?: Namespace,
  options: PrefixOptions = {}
) => {
  const i18nextInstance = await initI18next(lng, ns || DEFAULT_NS);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
};
