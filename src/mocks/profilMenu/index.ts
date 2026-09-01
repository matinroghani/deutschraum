import { MenunItemType } from "@/types/userMenu";
import {
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  Bell,
  Shield,
  HelpCircle,
  Users,
  CreditCard,
  BookOpen,
} from "lucide-react";

export const userMenuItems: MenunItemType[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "profile",
    label: "Mein Profil",
    href: "/profile",
    icon: User,
  },
  {
    id: "notifications",
    label: "Benachrichtigungen",
    href: "/notifications",
    icon: Bell,
  },
  {
    id: "team",
    label: "Team verwalten",
    href: "/team",
    icon: Users,
  },
  {
    id: "billing",
    label: "Abrechnung",
    href: "/billing",
    icon: CreditCard,
  },
  {
    id: "settings",
    label: "Einstellungen",
    href: "/settings",
    icon: Settings,
  },
  {
    id: "security",
    label: "Sicherheit",
    href: "/security",
    icon: Shield,
  },
  {
    id: "help",
    label: "Hilfe & Support",
    href: "/help",
    icon: HelpCircle,
  },
  {
    id: "documentation",
    label: "Dokumentation",
    href: "/docs",
    icon: BookOpen,
  },
  {
    id: "logout",
    label: "Abmelden",
    href: "logout",
    icon: LogOut,
  },
];