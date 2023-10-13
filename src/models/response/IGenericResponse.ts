export interface ISuccessResponse<T> {
  message: string;
  statusCode: number;
  data: T;
}
