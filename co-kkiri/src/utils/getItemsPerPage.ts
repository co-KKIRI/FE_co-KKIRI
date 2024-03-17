export const getItemsPerPage = () => {
  const screenWidth = window.innerWidth;
  let ITEMS_PER_PAGES;

  if (screenWidth >= 1200) {
    ITEMS_PER_PAGES = 12;
  } else if (screenWidth >= 768) {
    ITEMS_PER_PAGES = 8;
  } else {
    ITEMS_PER_PAGES = 3;
  }

  return ITEMS_PER_PAGES;
};
