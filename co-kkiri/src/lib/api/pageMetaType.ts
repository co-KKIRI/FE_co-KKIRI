export type PageMeta = {
  page: number;
  take: number; // 가져올 갯수
  totalCount: number; // 전체 갯수
  pageCount: number; // 페이지 갯수
  hasPreviousPage: boolean; // 이전 페이지가 있는지
  hasNextPage: boolean; // 다음 페이지가 있는지
};

export type PaginationOptions = {
  order?: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순 / 정렬 순서를 변경하고 싶을 때 사용하시면 됩니다. 기본으로 최신순으로 정렬되어 있다고 합니다.
  page?: number; // 요청할 페이지
  take?: number;
  pageCount?: number;
};
