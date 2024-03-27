export const getItemsPerPage = (isSideBarOpen: boolean) => {
  const screenWidth = window.innerWidth;
  let ITEMS_PER_PAGES;

  if (screenWidth >= 1410) {
    ITEMS_PER_PAGES = 16;
  } else if (screenWidth >= 1200) {
    if (isSideBarOpen) {
      ITEMS_PER_PAGES = 12;
    } else {
      ITEMS_PER_PAGES = 16;
    }
  } else if (screenWidth >= 768) {
    ITEMS_PER_PAGES = 8;
  } else {
    ITEMS_PER_PAGES = 3;
  }

  return ITEMS_PER_PAGES;
};
