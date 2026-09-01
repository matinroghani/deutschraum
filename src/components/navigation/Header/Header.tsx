import UserMenu from "./components/menu/UserMenu";
import NotificationButton from "./components/notification/NotificationButton";
import ChangeTheme from "./components/change-theme/ChangeTheme";
import MobileSidebarToggle from "../Sidebar/components/MobileSidebarToggle";
import SearchBox from "./components/searchbar/DictionarySearchBox";

export default function Header() {
  return (
    <header
      className="
        flex
        w-full
        items-center
        gap-4
        border-b
        border-(--color-border)
        px-(--spacing-header-x)
        py-3
        lg:gap-16
      "
    >
      <MobileSidebarToggle />

      <div className="min-w-0 flex-1 lg:flex-[3]">
        <SearchBox />
      </div>

      <div className="hidden items-center justify-end gap-5 sm:flex lg:flex-[2]">
        <div className="flex items-center gap-2">
          <ChangeTheme />
          <NotificationButton />
        </div>

        <UserMenu />
      </div>
    </header>
  );
}