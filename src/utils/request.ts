import { TOKEN } from "@src/services/raindrop/constants";

export default class Fetching {
  constructor(readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getUrl(endpoint: string) {
    return buildUrl(this.baseUrl, endpoint);
  }

  async get(endpoint: string) {
    const url = this.getUrl(endpoint);

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;
      })
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => {
        throw new Error("Request failed: " + error);
      });
  }
}

const buildUrl = (baseUrl: string, endpoint: string) => {
  return `${baseUrl}/${endpoint}`;
};
