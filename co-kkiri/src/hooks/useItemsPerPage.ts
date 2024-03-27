import { useState, useEffect } from "react";
import { getItemsPerPage } from "@/utils/getItemsPerPage";
import useSideBarStore from "@/stores/sideBarStore";

export function useItemsPerPage() {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(isSideBarOpen));

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage(isSideBarOpen));
    };
    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, [isSideBarOpen]);

  return itemsPerPage;
}
