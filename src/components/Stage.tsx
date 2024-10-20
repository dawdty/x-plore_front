import { useState, useEffect } from "react";
import { api } from "../api";
import { TrackedPaper } from "../api/response-types";
import StagedEntry from "./StagedEntry";

function Stage() {
  const [entries, setEntries] = useState<TrackedPaper[]>([]);

  useEffect(() => {
    const fetchStaged = async () => {
      const staged = await api.getStagedItems();
      console.log("API response:", staged); // Log the API response
      setEntries(staged);
    };
    fetchStaged();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <>
      <div className="container">
        <div className="row justify-content-between align-items-center staged-header">
          <div className="col-sm">
            <h3>Staged</h3>
          </div>
          <div className="col-sm text-end">
            <button type="button" className="btn staged-add-button">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="accordion custom-accordion--yellow" id="accordionFlush">
        {entries.map((entry) => (
          <div className="accordion-item" key={entry.paper.doi}>
            <h2 className="accordion-header bs-info-text-emphasis">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${entry.paper.doi}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${entry.paper.doi}`}
              >
                {entry.paper.title}
              </button>
            </h2>
            <div
              id={`flush-collapse${entry.paper.doi}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body">
                <StagedEntry key={entry.paper.doi} {...entry.paper} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stage;
