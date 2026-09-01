type DefinitionCardProps = {
  title: string;
  definitions: string[];
};

export default function DefinitionCard({
  title,
  definitions,
}: DefinitionCardProps) {
  const isPersian = title === "توضیح فارسی";

  return (
    <div
      dir={isPersian ? "rtl" : "ltr"}
      className={`
        rounded-lg
        border
        p-5
        transition-colors
        ${
          isPersian
            ? "border-[#d7e3dc] bg-[#eef4f0] [font-family:var(--font-yekan)]"
            : "border-[#d5e2e8] bg-[#eef4f7]"
        }
      `}
    >
      <span
        className={`
          font-bold
          text-lg
          ${
            isPersian
              ? "text-[#5d8b74]"
              : "text-[#66819b]"
          }
        `}
      >
        {title}
      </span>

      <div className="mt-3 space-y-2">
        {definitions.map((definition, index) => (
          <p
            key={index}
            className="text- leading-7 text-(--color-text-primary)"
          >
            {definition}
          </p>
        ))}
      </div>
    </div>
  );
}