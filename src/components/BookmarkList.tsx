import { IBookmark } from "@src/services/raindrop/types";
import * as React from "react";

const HIDE = {
  cover: "cover",
  excerpt: "excerpt",
  highlights: "highlights",
  info: "info",
  note: "note",
  tags: "tags",
  title: "title",
};

interface BookmarkListProps {
  bookmarks: IBookmark[];
  view: string;
  hide: string[];
}

const BookmarkList: React.FC<BookmarkListProps> = ({
  bookmarks,
  hide,
  view,
}) => {
  const hidden = (field: string) => hide.includes(field);

  return (
    <>
      <div>
        {bookmarks.map((b) => (
          <div key={b._id} className="pl-4">
            <div className="grid grid-cols-[4rem_1fr] gap-4 py-4 pr-4 border-b border-b-gray-300">
              <img src={b.cover} alt={b.title} hidden={hidden(HIDE.cover)} />
              <div>
                <span>{b.title}</span>
                <div className="text-sm">
                  <p className="text-gray-700" hidden={hidden(HIDE.excerpt)}>{b.excerpt}</p>
                  <div className="text-gray-500 flex gap-6">
                    <span>{b.domain}</span>
                    <span>{b.created.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookmarkList;
