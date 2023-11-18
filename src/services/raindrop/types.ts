export interface ISystemCollection {
  _id: number;
  count: number;
  title: string;
}

export interface IGroup {
  title: string;
  hidden: boolean;
  sort: number;
  collections: number[];
}

//
export interface IBookmark {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: string;
  user: User;
  cover: string;
  media: Media[];
  tags: any[];
  important: boolean;
  reminder: Reminder;
  removed: boolean;
  created: Date;
  lastUpdate: Date;
  collection: Collection;
  highlights: any[];
  domain: string;
  creatorRef: CreatorRef;
  sort: number;
  collectionId: number;
}

interface Collection {
  $ref: string;
  $id: number;
  oid: number;
}

interface CreatorRef {
  _id: number;
  avatar: string;
  name: string;
  email: string;
}

interface Media {
  link: string;
  type: string;
  screenshot?: boolean;
}

interface Reminder {
  date: null;
}

interface User {
  $ref: string;
  $id: number;
}

//

export interface IUser {
  _id: number;
  avatar: string;
  pro: boolean;
  name: string;
  fullName: string;
  email: string;
  groups: IGroup[];
  lastAction: Date;
  lastVisit: Date;
  registered: Date;
  lastUpdate: Date;
  config: Config;
  password: boolean;
}

export interface Config {
  raindrops_view: string;
  raindrops_hide: string[];
  raindrops_buttons: string[];
  raindrops_search_by_score: boolean;
  raindrops_search_incollection: boolean;
  broken_level: string;
  font_size: number;
  add_default_collection: number;
  acknowledge: string[];
  lang: string;
  filters_hide: boolean;
  tags_hide: boolean;
  raindrops_sort: string;
  raindrops_click: string;
  last_collection: number;
  default_collection_view: string;
}

//
export interface ICollection {
  _id: number;
  title: string;
  description: string;
  slug: string;
  user: User;
  creatorRef: CreatorRef;
  public: boolean;
  view: string;
  count: number;
  cover: any[];
  sort: number;
  expanded: boolean;
  lastAction: Date;
  created: Date;
  lastUpdate: Date;
  access: Access;
  author: boolean;
}

interface Access {
  for: number;
  level: number;
  root: boolean;
  draggable: boolean;
}

interface CreatorRef {
  _id: number;
  name: string;
  email: string;
}

interface User {
  $ref: string;
  $id: number;
}
