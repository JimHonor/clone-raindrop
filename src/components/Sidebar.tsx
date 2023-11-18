import { raindrop } from "@src/services/raindrop";
import {
  ICollection,
  IGroup,
  ISystemCollection,
} from "@src/services/raindrop/types";
import { useEffect, useState } from "react";
import CollectionList from "./CollectionList";

export default function Sidebar() {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [systemCollections, setSystemCollections] = useState<
    ISystemCollection[]
  >([]);
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    async function init() {
      const systemCollections = await raindrop.getSystemCollections();
      setSystemCollections(systemCollections);

      const collections = await raindrop.getCollections();
      setCollections(collections);

      const groups = await raindrop.getGroups();
      setGroups(groups);
    }
    init();
  }, []);

  const filterCollections = (group: IGroup) => {
    return collections
      .filter((c) => group.collections.includes(c._id))
      .sort((a, b) => a.sort - b.sort);
  };

  return (
    <>
      <CollectionList collections={systemCollections} />
      <div>
        {groups.map((g) => (
          <div key={g.sort}>
            <div className="px-4 py-1 text-sm text-gray-500">
              <span>{g.title}</span>
            </div>
            <CollectionList collections={filterCollections(g)} />
          </div>
        ))}
      </div>
    </>
  );
}
