import { ICONS } from "./icons";

export type CardCornerButtonType = "scrap" | "manage" | "write" | "view";

export type CardCornerButton = {
  [key in CardCornerButtonType]: {
    icon: (isScraped: boolean) => { src: string; alt: string };
    width?: number;
    text?: string;
  };
};

export const CARD_CORNER_BUTTON: CardCornerButton = {
  scrap: {
    icon: (isScraped: boolean) => (isScraped ? ICONS.scrapFull : ICONS.scrapEmpty),
    width: 36,
  },
  manage: {
    icon: () => ICONS.manage,
    width: 36,
  },
  write: {
    text: "리뷰 작성",
    icon: () => ICONS.pen,
    width: 16,
  },
  view: {
    text: "리뷰 보기",
    icon: () => ICONS.arrowRightGray,
    width: 14,
  },
};
