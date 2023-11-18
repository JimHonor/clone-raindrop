import { ICollection, ISystemCollection } from "@src/services/raindrop/types";
import {
  getActiveCollectionId,
  setActiveCollectionId,
} from "@src/services/web-storage/local-storage";
import * as React from "react";
import { useNavigate } from "react-router-dom";

interface CollectionListProps {
  collections: ICollection[] | ISystemCollection[];
}

const CollectionList: React.FC<CollectionListProps> = ({ collections }) => {
  const activeCollectionId = getActiveCollectionId();

  const navigate = useNavigate();

  const toggleActiveCollection = (id: number) => {
    setActiveCollectionId(id);
    navigate(`/my/${id}`);
  };

  return (
    <div>
      {collections.map((c) => (
        <div
          style={{
            backgroundColor: c._id === activeCollectionId ? "#e6e6e6" : "",
          }}
          className="py-1 px-4 cursor-pointer hover:bg-[#e6e6e6] flex justify-between"
          key={c._id}
          onClick={() => toggleActiveCollection(c._id)}
        >
          <span>{c.title}</span>
          <span>{c.count}</span>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
