import { RequestParameters } from "./request";

export default async function transport(params: RequestParameters) {
  const response = await fetch(params.url, params);
  if (response.status !== 200) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return await response.json();
}
