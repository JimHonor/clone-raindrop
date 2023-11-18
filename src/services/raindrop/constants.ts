//
const TOKEN = import.meta.env.VITE_RAINDROP_TEST_TOKEN;

//
const BASE_URL = "https://api.raindrop.io/rest/v1";

const ENDPOINT_COLLECTION = "collection";
const ENDPOINT_COLLECTIONS = "collections";
const ENDPOINT_RAINDROPS = "raindrops";
const ENDPOINT_SYSTEM_COLLECTIONS = "user/stats";
const ENDPOINT_USER = "user";

//
const SYSTEM_COLLECTION_IDS = {
  all: 0,
  unsorted: -1,
  trash: -99,
};

export {
  TOKEN,
  //
  BASE_URL,
  ENDPOINT_COLLECTION,
  ENDPOINT_COLLECTIONS,
  ENDPOINT_RAINDROPS,
  ENDPOINT_SYSTEM_COLLECTIONS,
  //
  SYSTEM_COLLECTION_IDS,
  ENDPOINT_USER,
};
