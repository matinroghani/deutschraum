import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        h-full
        w-(--sidebar-width)
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        bg-(--color-nav-bg)
        px-(--spacing-sidebar-x)
        py-(--spacing-sidebar-y)
        rounded-tr-(--radius-lg)
        rounded-br-(--radius-lg)
        lg:flex
      "
    >
      <SidebarContent />
    </aside>
  );
}