export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

export interface SidebarGroup {
  id: string;
  items: SidebarItem[];
}
