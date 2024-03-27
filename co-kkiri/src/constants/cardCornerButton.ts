import { UseMutationResult } from "@tanstack/react-query";
import { ICONS } from "./icons";

export type CardCornerButtonType = "scrap" | "manage" | "write" | "view";

export type CardCornerButton = {
  [key in CardCornerButtonType]: {
    icon: (isScraped: boolean) => { src: string; alt: string };
    width?: number;
    text?: string;
    onClick: (params: {
      ScrapMutation?: UseMutationResult<unknown, unknown, unknown, unknown> | undefined;
      isScraped?: boolean;
      toggle?: () => void;
      postId?: number;
      navigate?: (path: string) => void;
    }) => void;
  };
};

export const CARD_CORNER_BUTTON: CardCornerButton = {
  scrap: {
    icon: (isScraped: boolean) => (isScraped ? ICONS.scrapFull : ICONS.scrapEmpty),
    width: 36,
    onClick: ({ ScrapMutation }) => {
      ScrapMutation.mutate();
    },
    // onClick: ({ isScraped, toggle }) => {
    //   toggle?.();
    // },
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
