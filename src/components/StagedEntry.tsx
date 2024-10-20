// each item contains the paper specific items
import { StagedEntryItem } from "../api/response-types";

function StagedEntry({
  id,
  paper__title,
  paper__abstract,
  paper__url,
}: StagedEntryItem) {
  const abstract =
    paper__abstract == null ? "No description available." : paper__abstract;
  const truncatedAbstract =
    paper__abstract && abstract.length > 100
      ? abstract.substring(0, 100) + "..."
      : abstract;

  return (
    <>
      <h5>{paper__title}</h5>
      <p>{truncatedAbstract}</p>
    </>
  );
}

export default StagedEntry;
