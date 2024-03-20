// クライアントーコンポーネント用設定ファイル
"use client";

import i18next, { Namespace } from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { Language, getOptions, PrefixOptions } from "./settings";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      // NOTE: 型定義が提供されてない ^ any定義による影響の小ささから、一旦型定義は後回しにする
      (language: any, namespace: any) =>
        import(`./languages/${language}/${namespace}.json`)
    )
  )
  .init(getOptions());

/**
 * @description client component用の翻訳hooks
 */
export const useTranslation = (
  lng: Language,
  ns?: Namespace,
  options?: PrefixOptions
) => {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
  return useTranslationOrg(ns, options);
};
