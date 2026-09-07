import BreadCrumb from "@/components/shared/breadCrumb/BreadCreumb";

import WordBaseInfos from "@/features/dictionary/components/wordBaseInfo/Word-BaseInfos";
import WordExample from "@/features/dictionary/components/wordExample/Word-Example";
import WordLinks from "@/features/dictionary/components/wordLinks/Word-Links";
import WordVideos from "@/features/dictionary/components/wordVideos/WordVideos";
import { DictionaryWordProvider } from "@/features/dictionary/context/DictionaryContext";

import { getDictionaryWordService } from "@/features/dictionary/services/dictionary.service";
import { dictionaryMock } from "@/mocks/dictionary";

import { notFound } from "next/navigation";

export default async function Words({
  params,
}: {
  params: Promise<{ word: string }>;
}) {
  const { word } = await params;

  const dictionaryWord = getDictionaryWordService(
    dictionaryMock,
    word,
  );

  if (!dictionaryWord) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumb />

      <section className="flex flex-col gap-5">
        <DictionaryWordProvider dictionaryWord={dictionaryWord}>
          <WordBaseInfos />

          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
            <WordExample />
            <WordVideos />
          </div>

          <div>
            <WordLinks />
          </div>
        </DictionaryWordProvider>
      </section>
    </div>
  );
}