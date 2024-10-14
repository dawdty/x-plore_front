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
    };
    fetchStaged();
  }, []);
  useEffect(() => {
    console.log("entries", entries);
  });
  return (
    <>
      <h3>Staged</h3>
      <div className="accordion custom-accordion--yellow" id="accordionFlush">
        {entries.map((entry) => (
          <>
            <div className="accordion-item">
              <h2 className="accordion-header bs-info-text-emphasis">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${entry.id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${entry.id}`}
                >
                  {entry.paper__title}
                </button>
              </h2>
              <div
                id={`flush-collapse${entry.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlush"
              >
                <div className="accordion-body">
                  <StagedEntry key={entry.id} {...entry} />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Stage;
