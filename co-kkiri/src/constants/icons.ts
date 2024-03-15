import arrowRight from "@/assets/icons/arrow_right.svg";
import backspace from "@/assets/icons/backspace.svg";
import category from "@/assets/icons/category.svg";
import close from "@/assets/icons/close.svg";
import comment from "@/assets/icons/comment.svg";
import deleted from "@/assets/icons/delete.svg";
import arrowDown from "@/assets/icons/arrow_down.svg";
import arrowDownColor from "@/assets/icons/arrow_down_color.svg";
import eye from "@/assets/icons/eye.svg";
import scrapFull from "@/assets/icons/scrap_click.svg";
import scrapEmpty from "@/assets/icons/scrap.svg";
import search from "@/assets/icons/search.svg";
import share from "@/assets/icons/share.svg";
import triangle from "@/assets/icons/triangle.svg";
import post from "@/assets/icons/post.svg";
import questionMark from "@/assets/icons/question-mark.svg";
import categorySelected from "@/assets/icons/category_selected.svg";
import calendar from "@/assets/icons/calendar.svg";
import reset from "@/assets/icons/reset.svg";
import { Images } from "@/types/ImageTypes";

export const ICONS: Images = {
  arrowRight: {
    src: arrowRight,
    alt: "다음",
  },
  backspace: {
    src: backspace,
    alt: "뒤로 가기",
  },
  category: {
    src: category,
    alt: "메뉴 펼치기",
  },
  close: {
    src: close,
    alt: "닫기",
  },
  comment: {
    src: comment,
    alt: "댓글 수",
  },
  deleted: {
    src: deleted,
    alt: "삭제하기",
  },
  popover: {
    src: arrowDown,
    alt: "드롭다운 펼치기",
  },
  popoverSelected: {
    src: arrowDownColor,
    alt: "선택된 드롭다운",
  },
  eye: {
    src: eye,
    alt: "조회 수",
  },
  scrapFull: {
    src: scrapFull,
    alt: "스크랩 활성",
  },
  scrapEmpty: {
    src: scrapEmpty,
    alt: "스크랩 비활성",
  },
  search: {
    src: search,
    alt: "검색하기",
  },
  share: {
    src: share,
    alt: "공유하기",
  },
  triangle: {
    src: triangle,
    alt: "필터 펼치기",
  },
  post: {
    src: post,
    alt: "스터디/프로젝트 모집글 작성하기",
  },
  questionMark: {
    src: questionMark,
    alt: "물음표",
  },
  categorySelected: {
    src: categorySelected,
    alt: "선택된 카테고리",
  },
  calendar: {
    src: calendar,
    alt: "날짜선택 달력",
  },
  reset: {
    src: reset,
    alt: "초기화"
  }
};
