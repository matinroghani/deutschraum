import { SidebarGroup } from "@/types/sidebar/navItem";

import {
  LayoutDashboard,
  BookOpen,
  Book,
  ClipboardList,
  TrendingUp,
  Globe,
  GraduationCap,
  User,
  Settings,
} from "lucide-react";

export const sidebarItems: SidebarGroup[] = [
  {
    id: "main",
    items: [
      {
        id: "dashboard",
        label: "Startseite",
        icon: LayoutDashboard,
        href: "/dashboard",
      },
      {
        id: "learn",
        label: "Lernen",
        icon: BookOpen,
        href: "/learn",
      },
      {
        id: "dictionary",
        label: "Wörterbuch",
        icon: Book,
        href: "/dictionary",
      },
      {
        id: "exercises",
        label: "Übungen",
        icon: ClipboardList,
        href: "/exercises",
      },
      {
        id: "progress",
        label: "Fortschritt",
        icon: TrendingUp,
        href: "/progress",
      },
      {
        id: "culture",
        label: "Kultur",
        icon: Globe,
        href: "/culture",
      },
      {
        id: "education",
        label: "Ausbildung",
        icon: GraduationCap,
        href: "/education",
      },
    ],
  },
  {
    id: "actions",
    items: [
      {
        id: "profile",
        label: "Mein Profil",
        icon: User,
        href: "/profile",
      },
      {
        id: "settings",
        label: "Einstellungen",
        icon: Settings,
        href: "/settings",
      },
    ],
  },
];
