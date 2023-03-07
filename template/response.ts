/**
 * The response of a HTTP request, contains both the response data and associated metadata.
 */
export interface HttpResponse<T> {
  /**
   * The response data.
   * @type T
   */
  data: T;

  /**
   * The response status code.
   * @type number
   */
  statusCode: number;

  /**
   * The response headers.
   * @type Record<string, string>
   */
  headers: Record<string, string>;

  /**
   * The type of the response (e.g., basic, cors).
   * @type string
   */
  type: string;
}
