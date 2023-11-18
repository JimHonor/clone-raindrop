export const HIDE = {
  cover: "cover",
  excerpt: "excerpt",
  highlights: "highlights",
  info: "info",
  note: "note",
  tags: "tags",
  title: "title",
};

export const HIDE_VALUE = Object.values(HIDE);

export const HIDE_OPTIONS = [
  {
    field: HIDE.cover,
    display: "Cover",
  },
  {
    field: HIDE.title,
    display: "Title",
  },
  {
    field: HIDE.note,
    display: "Note",
  },
  {
    field: HIDE.excerpt,
    display: "Description",
  },
  {
    field: HIDE.highlights,
    display: "Highlights",
  },
  {
    field: HIDE.tags,
    display: "Tags",
  },
  {
    field: HIDE.info,
    display: "Bookmarks info",
  },
];
