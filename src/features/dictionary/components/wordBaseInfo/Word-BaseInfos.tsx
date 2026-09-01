
import Heading from "./components/Heading";
import Metadata from "./components/Metadata";
import WordDefinition from "./Word-Definition";

export default function WordBaseInfos() {

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-(--color-border) px-6 py-10">
      {/* Word heading */}
      <Heading />

      {/* Word metadata */}
      <Metadata />

      {/* Word Definition */}
      <WordDefinition />
    </div>
  );
}