import en, { Translations } from './en';
import ko from './ko';
import ja from './ja';
import zh from './zh';
import my from './my';

import _get from 'lodash/get';
import { getStore, setStore } from '@/lib/localStore';
import { strTemplate } from '@/lib/utils';


const LANGUAGE_PREFIX: "language" = "language";

export const countries = {
  en: "English",
  ja: "Japan",
  my: "Myanmar",
  ko: "Korea",
  zh: "Taiwan"
}

export type I18nOptions = {
  [K: string]: string
}

export type I18n = {
  translations: {
    [K: string]: Translations
  }
  local: string, // keyof I18n["translations"],
  t: (key: TxPath, options?: I18nOptions) => string,
  load: (lang: string) => void,
}

export const i18n: I18n = {
  translations: { en, ko, my, ja, zh },
  local: getStore<keyof typeof countries>(LANGUAGE_PREFIX) || "en",
  
  t(key, options) {
    const localPrefix = this.translations[this.local as keyof I18n["translations"]];
    let msg = _get(localPrefix, key);
    if (options) msg = strTemplate(_get(localPrefix, key), options);
    return msg;
  },

  load(lang: string) {
    setStore(LANGUAGE_PREFIX, lang);
    this.local = lang;
  },
}


type RecusiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
    ? `${Text}.${RecusiveKeyOf<TValue>}`
    : Text

type RecusiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string)]: RecusiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & string]

export type TxPath = RecusiveKeyOf<Translations>;
