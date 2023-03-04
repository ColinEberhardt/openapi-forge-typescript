/**
 * The response of a HTTP request, contains both the response data and associated metadata.
 */
export interface HttpResponse<T> {
  data: T;
  statusCode: number;
  headers: Record<string, string>;
  type: string;
}
