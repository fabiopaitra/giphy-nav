export interface Item extends Record<string, any> {
  id: string;
  title: string;
  images: {
    fixed_height_downsampled: {
      height: string;
      url: string;
    }
  }
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
  isSearch: boolean;
}

export interface ImageListResponse {
  data: Item[];
  pagination: Pagination;
  meta: Meta;
}