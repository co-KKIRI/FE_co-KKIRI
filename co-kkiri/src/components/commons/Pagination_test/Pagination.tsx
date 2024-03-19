import styled from "styled-components";
import { PAGINATION_ICONS } from "@/constants/paginationIcons";
import DESIGN_TOKEN from "@/styles/tokens";
import { useWindowSize } from "usehooks-ts";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
  totalPages: number;
}

export default function Pagination({ currentPage, setCurrentPage, totalPages }: PaginationProps) {
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth < 768;

  const goToPrevBlock = () => {
    setCurrentPage(Math.max(currentPage - 9, 1));
  };

  const goToNextBlock = () => {
    setCurrentPage(Math.min(currentPage + 9, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };
  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let maxVisiblePages;
    if (isMobile) {
      maxVisiblePages = 5;
    } else {
      maxVisiblePages = 9;
    }

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PageNumber key={i} onClick={() => goToPage(i)} $active={currentPage === i}>
            {i}
          </PageNumber>,
        );
      }
    } else {
      const currentBlockStart = Math.ceil(currentPage / maxVisiblePages) * maxVisiblePages - maxVisiblePages + 1;
      const currentBlockEnd = Math.min(totalPages, currentBlockStart + maxVisiblePages - 1);

      if (currentPage > maxVisiblePages) {
        pageNumbers.push(
          <PageNumber key="prevBlock" onClick={goToPrevBlock}>
            <img src={PAGINATION_ICONS.prevBlock.src} alt={PAGINATION_ICONS.prevBlock.alt} />
          </PageNumber>,
        );
        pageNumbers.push(
          <PageNumber key="prev" onClick={goToPrevPage}>
            <img src={PAGINATION_ICONS.prevPage.src} alt={PAGINATION_ICONS.prevPage.alt} />
          </PageNumber>,
        );
      } else {
        pageNumbers.push(
          <PageNumber key="prevBlock" onClick={goToPrevBlock} disabled>
            <img src={PAGINATION_ICONS.prevBlockDisabled.src} alt={PAGINATION_ICONS.prevBlockDisabled.alt} />
          </PageNumber>,
        );
        pageNumbers.push(
          <PageNumber key="prev" onClick={goToPrevPage} disabled>
            <img src={PAGINATION_ICONS.prevPageDisabled.src} alt={PAGINATION_ICONS.prevPageDisabled.alt} />
          </PageNumber>,
        );
      }

      for (let i = currentBlockStart; i <= currentBlockEnd; i++) {
        pageNumbers.push(
          <PageNumber key={i} onClick={() => goToPage(i)} $active={currentPage === i}>
            {i}
          </PageNumber>,
        );
      }

      if (currentBlockEnd < totalPages) {
        pageNumbers.push(
          <PageNumber key="next" onClick={goToNextPage}>
            <img src={PAGINATION_ICONS.nextPage.src} alt={PAGINATION_ICONS.nextPage.alt} />
          </PageNumber>,
        );
        pageNumbers.push(
          <PageNumber key="nextBlock" onClick={goToNextBlock}>
            <img src={PAGINATION_ICONS.nextBlock.src} alt={PAGINATION_ICONS.nextBlock.alt} />
          </PageNumber>,
        );
      } else {
        pageNumbers.push(
          <PageNumber key="next" onClick={goToNextPage} disabled>
            <img src={PAGINATION_ICONS.nextPageDisabled.src} alt={PAGINATION_ICONS.nextPageDisabled.alt} />
          </PageNumber>,
        );
        pageNumbers.push(
          <PageNumber key="nextBlock" onClick={goToNextBlock} disabled>
            <img src={PAGINATION_ICONS.nextBlockDisabled.src} alt={PAGINATION_ICONS.nextBlockDisabled.alt} />
          </PageNumber>,
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <PaginationContainer>{renderPageNumbers()}</PaginationContainer>
    </div>
  );
}

const { typography, color } = DESIGN_TOKEN;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageNumber = styled.button<{ $active?: boolean }>`
  ${typography.font16Regular}
  width: 3rem;
  height: 3rem;
  text-align: center;
  border-radius: 50%;
  background-color: ${(props) => props.$active && `${color.primary[2]}`};
`;
