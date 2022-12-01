import { HttpClient, HttpStatusCodeEnum } from '~/app/application/protocols';
import { AccessDeniedError, UnexpectedError } from '~/app/domain/errors';
import { LoadEmployees } from '~/app/domain/usecases';
import { camelizeKeys } from '~/app/infra/utils';

export class RemoteLoadEmployees {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadEmployees.ApiResponse>
  ) {}

  async load(
    params: RemoteLoadEmployees.Params
  ): Promise<RemoteLoadEmployees.Response> {
    const { page, limit } = params;

    const queryString = new URLSearchParams({
      page: String(page),
      limit: String(limit)
    });

    const url = `${this.url}?${queryString}`;

    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: url
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok:
        return parse(httpResponse.body as RemoteLoadEmployees.ApiResponse);
      case HttpStatusCodeEnum.noContent:
        return {} as RemoteLoadEmployees.Response;
      case HttpStatusCodeEnum.unauthorized:
      case HttpStatusCodeEnum.badRequest:
      case HttpStatusCodeEnum.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}

function parse(
  params: RemoteLoadEmployees.ApiResponse
): RemoteLoadEmployees.Response {
  const { employees, meta } = params;

  const camelizeEmployees = employees.map(employee =>
    camelizeKeys<RemoteLoadEmployees.Employees>(employee)
  );
  const camelizeMeta = camelizeKeys<RemoteLoadEmployees.Meta>(meta);

  return {
    employees: camelizeEmployees,
    meta: camelizeMeta
  };
}

export namespace RemoteLoadEmployees {
  export type Params = LoadEmployees.Params;
  export type ApiResponse = LoadEmployees.ApiResponse;
  export type Employees = LoadEmployees.Employees;
  export type Meta = LoadEmployees.Meta;
  export type Response = LoadEmployees.Response;
}
