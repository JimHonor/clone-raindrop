//

import Fetching from "@src/utils/request";
import {
  BASE_URL,
  ENDPOINT_SYSTEM_COLLECTIONS,
  ENDPOINT_USER,
  TOKEN,
} from "./constants";
import {
  ENDPOINT_COLLECTION,
  ENDPOINT_COLLECTIONS,
  ENDPOINT_RAINDROPS,
} from "./constants";
import {
  IBookmark,
  ICollection,
  IGroup,
  ISystemCollection,
  IUser,
} from "./types";

//

const fetching = new Fetching(BASE_URL);

//

class Raindrop {
  #token;

  constructor(token: string) {
    this.#token = token;

    // send token to fetching
  }

  //
  // 注意，这里获取到的 collections 仅仅只是用户自己创建的 collection，不包含 unsorted 等三个系统自带的 collection。
  async getCollections(): Promise<ICollection[]> {
    const data = await fetching.get(ENDPOINT_COLLECTIONS);
    return data.items;
  }

  async getSystemCollections(): Promise<ISystemCollection[]> {
    const data = await fetching.get(ENDPOINT_SYSTEM_COLLECTIONS);
    return data.items.map((item: { _id: number }) => {
      if (item._id === 0) {
        return { ...item, title: "All bookmarks" };
      }
      if (item._id === -1) {
        return { ...item, title: "Unsorted" };
      }
      if (item._id === -99) {
        return { ...item, title: "Trash" };
      }
    });
  }

  //

  getCollection(id: string | number): Promise<ICollection> {
    return fetching
      .get(`${ENDPOINT_COLLECTION}/${id}`)
      .then((data) => data.item);
  }

  // getTrashCollection() {
  //   return fetching.get(`${ENDPOINT_COLLECTION}/${SYSTEM_COLLECTIONS.trash}`);
  // }

  // getUnsortedCollection() {
  //   return fetching.get(
  //     `${ENDPOINT_COLLECTION}/${SYSTEM_COLLECTIONS.unsorted}`
  //   );
  // }

  //
  async getBookmarks(collectionId: string | number): Promise<IBookmark[]> {
    // return { collectionId, count, items, result}
    const { items } = await fetching.get(
      `${ENDPOINT_RAINDROPS}/${collectionId}`
    );
    return items;
  }

  //
  async getUser(): Promise<IUser> {
    const { user } = await fetching.get(ENDPOINT_USER);
    return user;
  }

  async getGroups() {
    const { groups } = await this.getUser();
    return groups;
  }

  async getRaindropsHide() {
    const {
      config: { raindrops_hide },
    } = await this.getUser();
    return raindrops_hide;
  }
}

//

const raindrop = new Raindrop(TOKEN);

export { raindrop };
