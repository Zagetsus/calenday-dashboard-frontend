export interface LoadProducts {
  load: (params: LoadProducts.Params) => Promise<LoadProducts.Response>;
}

export namespace LoadProducts {
  export type Params = {
    page: number;
    limit: number;
  };

  export type ApiProducts = {
    id: string;
    reference: string;
    name: string;
    status: string;
    brand: string;
    price: string;
    stock: 30;
    type: string;
    category: string;
    company_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };

  export type ApiMeta = {
    results: number;
    current_page: number;
    total_pages: number;
  };

  export type ApiResponse = {
    products: ApiProducts[];
    meta: ApiMeta;
  };

  export type Products = {
    id: string;
    reference: string;
    name: string;
    status: string;
    brand: string;
    price: string;
    stock: 30;
    type: string;
    category: string;
    companyId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };

  export type Meta = {
    results: number;
    currentPage: number;
    totalPages: number;
  };

  export type Response = {
    products: Products[];
    meta: Meta;
  };
}
