import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        min-h-screen
        w-[var(--sidebar-width)]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        bg-[var(--color-nav-bg)]
        px-[var(--spacing-sidebar-x)]
        py-[var(--spacing-sidebar-y)]
        rounded-tr-[var(--radius-lg)]
        rounded-br-[var(--radius-lg)]
        lg:flex
      "
    >
      <SidebarContent />
    </aside>
  );
}
