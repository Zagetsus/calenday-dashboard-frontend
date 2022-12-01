export interface CreationProduct {
  create: (body: CreationProduct.Body) => Promise<CreationProduct.Response>;
}

export namespace CreationProduct {
  export type Body = {
    reference: string;
    name: string;
    status: 'PUBLISHED' | 'DISABLED' | 'DRAFT';
    brand: string;
    price: number;
    stock: number;
    type: 'UNITY' | 'KIT';
    categoryId: string;
  };

  export type ApiResponse = {
    id: string;
    reference: string;
    name: string;
    status: 'PUBLISHED' | 'DISABLED' | 'DRAFT';
    brand: string;
    price: string;
    stock: number;
    type: 'UNITY' | 'KIT';
    category_id: string;
    company_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };

  export type Response = {
    id: string;
    reference: string;
    name: string;
    status: 'PUBLISHED' | 'DISABLED' | 'DRAFT';
    brand: string;
    price: string;
    stock: number;
    type: 'UNITY' | 'KIT';
    categoryId: string;
    companyId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}
