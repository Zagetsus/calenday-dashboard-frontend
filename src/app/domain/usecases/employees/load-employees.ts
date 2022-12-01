export interface LoadEmployees {
  load: (params: LoadEmployees.Params) => Promise<LoadEmployees.Response>;
}

export namespace LoadEmployees {
  export type Params = {
    page: number;
    limit: number;
  };

  export type ApiEmployees = {
    id: string;
    name: string;
    email: string;
    phone: string;
    occupation: string;
    specialty: string;
    created_at: string;
  };

  export type ApiMeta = {
    results: number;
    current_page: number;
    total_pages: number;
  };

  export type ApiResponse = {
    employees: ApiEmployees[];
    meta: ApiMeta;
  };

  export type Employees = {
    id: string;
    name: string;
    email: string;
    phone: string;
    occupation: string;
    specialty: string;
    createdAt: string;
  };

  export type Meta = {
    results: number;
    currentPage: number;
    totalPages: number;
  };

  export type Response = {
    employees: Employees[];
    meta: Meta;
  };
}
