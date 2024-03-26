import { POSITION_CHIP_LIMIT } from "@/constants/cardChipLimits";
import { Pages } from "@/types/pagesTypes";

export function getPositionChipLimit(page: Pages) {
  if (page === "home") {
    return POSITION_CHIP_LIMIT.home;
  }
  return POSITION_CHIP_LIMIT.default;
}
