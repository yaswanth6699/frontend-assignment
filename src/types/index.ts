import { SVGProps } from "react";

export type ArrowProps = {
  disabled?: boolean;
} & SVGProps<SVGSVGElement>;

export type PaginationProps = {
  pages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export type ProjectProps = {
  "s.no": number;
  "amt.pledged": number;
  blurb: string;
  by: string;
  country: string;
  currency: string;
  "end.time": string;
  location: string;
  "percentage.funded": number;
  "num.backers": string;
  state: string;
  title: string;
  type: string;
  url: string;
};

export type TableDataProps = {
  data: Partial<ProjectProps[]> | ProjectProps[];
  isLoading: boolean;
  isError: boolean;
};

export type RecordsProps = {
  records: number;
  setRecords: React.Dispatch<React.SetStateAction<RecordsProps["records"]>>;
};
