// Configuration file for client components
"use client";

import i18next, { Namespace } from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { getOptions, PrefixOptions } from "./settings";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: any, namespace: any) =>
        import(`./languages/${language}/${namespace}.json`)
    )
  )
  .init(getOptions());

/**
 * @description Translation hooks for client components
 */
export const useTranslation = (ns?: Namespace, options?: PrefixOptions) => {
  return useTranslationOrg(ns, options);
};
