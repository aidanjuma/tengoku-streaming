import { ITitle } from "@consumet/extensions/dist/models/types";

export interface ContentType {
  medium: "ANIME" | "MANGA";
  status: "POPULAR" | "TRENDING";
}

export interface InformationProps {
  id: string;
  title: string | ITitle;
  cover?: string;
  image?: string;
  description?: string;
  genres?: string[];
}

export interface InfoTitleProps {
  title: string | ITitle;
}

export interface DisplayInfoProps {
  description?: string;
  genres?: string[];
}

export enum TitleLanguage {
  native = "NATIVE",
  romaji = "ROMAJI",
  english = "ENGLISH",
}
