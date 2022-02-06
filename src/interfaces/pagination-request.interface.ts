type PaginatedRequest = {
  search: string;
  sortBy: string;
  orderBy: string;
  limit: number;
  page: number;
};

type PaginatedResponse<T> = {
  data: T;
  total: number;
  page: number;
  pages: number;
  limit: number;
  sortBy: string;
  orderBy: string;
};
