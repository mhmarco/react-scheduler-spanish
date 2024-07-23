import { en } from "@/locales/en";
import { pl } from "@/locales/pl";
import { es } from "@/locales/es";
import { LocaleType } from "./types";

export const locales: LocaleType[] = [
  {
    id: "en",
    name: "ENGLISH",
    lang: en,
    translateCode: "en-GB"
  },
  {
    id: "pl",
    name: "POLISH",
    lang: pl,
    translateCode: "pl-PL"
  },
  {
    id: "es",
    name: "SPANISH",
    lang: es,
    translateCode: "es-ES"
  }
];
