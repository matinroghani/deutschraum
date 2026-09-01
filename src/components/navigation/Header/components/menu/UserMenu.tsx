
import UserAvatar from "@/components/shared/user/UserAvatar/UserAvatar";
import Link from "next/link";
import MainMenu from "./MainMenu";

export default function UserMenu() {


  return (
    <div className="flex items-center gap-3 border-l pl-3 border-(--color-border)">
      <Link href="/profile">
        <UserAvatar />
      </Link>

      <div className="hidden lg:flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-(--color-text)">
          <Link href="/profile">Matin Roghani</Link>
        </span>

        <span className="text-xs text-(--color-text-secondary)">
          B2 - Fortgeschritten
        </span>
      </div>

      <MainMenu />

    </div>
  );
}
