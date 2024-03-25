import { ICONS } from "./icons";

export type CardCornerButtonType = "scrap" | "manage" | "write" | "view";

export type CardCornerButton = {
  [key in CardCornerButtonType]: {
    icon: (isScrapped: boolean) => { src: string; alt: string };
    width?: number;
    text?: string;
    onClick: (params: {
      isScrapped?: boolean;
      toggle?: () => void;
      postId?: number;
      navigate?: (path: string) => void;
    }) => void;
  };
};

export const CARD_CORNER_BUTTON: CardCornerButton = {
  scrap: {
    icon: (isScrapped: boolean) => (isScrapped ? ICONS.scrapFull : ICONS.scrapEmpty),
    width: 36,
    onClick: ({ isScrapped, toggle }) => {
      toggle?.();
    },
  },
  manage: {
    icon: () => ICONS.manage,
    width: 36,
    onClick: ({ postId, navigate }) => {
      navigate?.(`/mystudy/${postId}`);
    },
  },
  write: {
    text: "리뷰 작성",
    icon: () => ICONS.pen,
    width: 16,
    onClick: ({ postId, navigate }) => {
      navigate?.(`/mystudy/${postId}/review`);
    },
  },
  view: {
    text: "리뷰 보기",
    icon: () => ICONS.arrowRightGray,
    width: 14,
    onClick: () => {},
  },
};
