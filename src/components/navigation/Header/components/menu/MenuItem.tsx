import { MenunItemType } from "@/types/userMenu";
import Link from "next/link";

type MenuItemProps = {
  item: MenunItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
    const Icon = item.icon
  return (
    <li className=" border-b border-(--color-border) text-sm text-(--color-text) last:border-b-0">
      <Link
        href={item.href}
        className="flex gap-3 items-center  whitespace-nowrap  rounded-md  px-3  py-2.5  transition-colors  duration-150  hover:bg-(--color-bg-secondary)"
      >
        {<Icon />}
        {item.label}
      </Link>
    </li>
  );
}
