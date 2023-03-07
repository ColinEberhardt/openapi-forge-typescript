import { RequestParameters } from "./request";
import { Transport } from "../api/configuration";

const parseHeaders = (headers: Headers) => {
  const res: Record<string, string> = {};
  for (const [key, value] of headers.entries()) {
    res[key] = value;
  }
  return res;
};

const transport: Transport = async function (params: RequestParameters) {
  const fetchResponse = await fetch(params.url, params);

  if (fetchResponse.ok) {
    const json = await fetchResponse.json();
    return {
      data: json,
      statusCode: fetchResponse.status,
      headers: parseHeaders(fetchResponse.headers),
      type: fetchResponse.type,
    };
  } else {
    throw new Error(
      `Error ${fetchResponse.status}: ${fetchResponse.statusText}`
    );
  }
};

export default transport;
