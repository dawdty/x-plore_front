// each item contains the paper specific items
import { StagedEntryItem } from "../api/response-types";

function StagedEntry({
  id,
  paper__title,
  paper__abstract,
  paper__url,
}: StagedEntryItem) {
  return (
    <>
      <h2>{paper__title}</h2>
      <p>{paper__abstract}</p>
    </>
  );
}

export default StagedEntry;
