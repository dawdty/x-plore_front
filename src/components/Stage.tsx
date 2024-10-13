// stage includes button to add and a dropdown view of all items in staging area
import { useState, useEffect } from "react";
import { api } from "../api";
import { StagedEntryItem } from "../api/response-types";
import StagedEntry from "./StagedEntry";

interface Props {
  user_id: number;
}

function Stage({ user_id }: Props) {
  const [entries, setEntries] = useState<StagedEntryItem[]>([]);
  useEffect(() => {
    const fetchStaged = async () => {
      const staged = await api.getStagedItems(user_id);
      setEntries(staged);
      console.log("staged foo", entries);
    };
    fetchStaged();
  }, []);
  return (
    <>
      <ul className="list-group">
        {entries.map((entry) => (
          <StagedEntry key={entry.id} {...entry}></StagedEntry>
        ))}
      </ul>
    </>
  );
}

export default Stage;
