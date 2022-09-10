import { ITitle } from "@consumet/extensions/dist/models/types";
import { TitleLanguage } from "@models/types";

const evaluateTitleLanguage = (
  titleObj: ITitle,
  language: TitleLanguage
): string | undefined => {
  switch (language) {
    case "ENGLISH":
      return titleObj.english;
    case "NATIVE":
      return titleObj.native;
    case "ROMAJI":
      return titleObj.romaji;
  }
};

export const getItemTitle = (
  titleObj: string | ITitle,
  language: TitleLanguage
) => {
  const title: string | undefined =
    typeof titleObj === "string"
      ? titleObj
      : evaluateTitleLanguage(titleObj, language);

  return title;
};