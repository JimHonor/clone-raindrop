import { raindrop } from "@src/services/raindrop";
import { IBookmark } from "@src/services/raindrop/types";
import { getActiveCollectionId } from "@src/services/web-storage/local-storage";
import { useEffect, useState } from "react";
import BookmarkList from "./BookmarkList";
import { HIDE_VALUE } from "./constants";
import ViewMenu from "./ViewMenu";

export default function Main() {
  const activeCollectionId = getActiveCollectionId();
  console.log(activeCollectionId);

  const [bookmarks, setBookmarks] = useState<IBookmark[]>([]);
  const [view, setView] = useState("");
  const [hide, setHide] = useState<string[]>([]);

  const hideInView = hide.reduce((result: string[], item) => {
    if (item.includes(view)) {
      const field = item.slice(view.length + 1);
      result.push(field);
    }
    return result;
  }, []);
  const showInView = HIDE_VALUE.filter((h) => !hideInView.includes(h));

  useEffect(() => {
    async function init() {
      const bookmarks = await raindrop.getBookmarks(activeCollectionId);
      setBookmarks(bookmarks);

      const { view } = await raindrop.getCollection(activeCollectionId);
      setView(view);

      const raindropsHide = await raindrop.getRaindropsHide();
      setHide(raindropsHide);
    }
    init();
  }, []);

  const handleHideChange = (hide) => {};

  return (
    <>
      <div>
        <ViewMenu
          view={view}
          showInView={showInView}
          onHideChange={(hide) => setHide(hide)}
        />
      </div>
      <BookmarkList bookmarks={bookmarks} view={view} hide={hideInView} />
    </>
  );
}
