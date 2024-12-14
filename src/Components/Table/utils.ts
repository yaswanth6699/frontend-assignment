export const getCustomPaginationArr = (pages: number, currentPage: number) => {
  const pageList = Array.from({ length: pages }, (_, index) => index + 1);
  if (pages <= 7) return pageList;
  const result: Array<string | number> = [];
  if (currentPage < 5) {
    result.push(...pageList.slice(0, 5), "...", pages);
  } else if (currentPage >= pages - 5) {
    result.push(1, "...", ...pageList.slice(pages - 5));
  } else {
    result.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      pages
    );
  }
  return result;
};
