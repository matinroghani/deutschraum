import Logo from "@/components/shared/logo/Logo";
import SidebarItem from "./components/SidebarItem";
import SidebarGoal from "./components/SidebarGoal";


export default function SidebarContent() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Logo />
        <SidebarItem />
      </div>

      <SidebarGoal />
    </>
  );
}
