import { I18nOptions } from "@/i18n";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function strTemplate(str: string, context: I18nOptions) {
  for (const key in context) {
    const value = context[key];
    const placeholder = `#{${key}}`;
    str = str.replace(placeholder, value);
  }
  return str;
}
