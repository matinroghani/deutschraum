type WordLevelProps = {
  level: string;
};

const levelColors: Record<string, string> = {
  A1: "bg-sky-500",
  A2: "bg-blue-500",
  B1: "bg-indigo-500",
  B2: "bg-violet-500",
  C1: "bg-amber-500",
  C2: "bg-orange-500",
};

export default function WordLevel({ level }: WordLevelProps) {
  const colorClass =
    levelColors[level] ??
    "bg-(--color-bg-secondary)";

  return (
    <span
      className={`
        ml-5
        inline-flex
        items-center
        rounded-sm
        px-3
        py-1
        text-sm
        font-semibold
        text-(--color-surface)
        ${colorClass}
      `}
    >
      {level}
    </span>
  );
}