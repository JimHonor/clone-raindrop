import { SYSTEM_COLLECTION_IDS } from "../raindrop/constants";

//
const KEYS = {
  activeCollectionId: "activeCollectionId",
};

//
const setActiveCollectionId = (id: number) => {
  localStorage.setItem(KEYS.activeCollectionId, id.toString());
};

const getActiveCollectionId = () => {
  const value = localStorage.getItem(KEYS.activeCollectionId);
  if (value === null) {
    setActiveCollectionId(SYSTEM_COLLECTION_IDS.all);
    return SYSTEM_COLLECTION_IDS.all;
  }
  return parseInt(value);
};

export { setActiveCollectionId, getActiveCollectionId };
