import Header from "@/components/navigation/Header/Header";
import MobileSidebar from "@/components/navigation/Sidebar/MobileSidebar";
import Sidebar from "@/components/navigation/Sidebar/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-dvh overflow-hidden">
        <Sidebar />
        <MobileSidebar />

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <Header />

          <main
            className="
              min-h-0
              min-w-0
              flex-1
              overflow-y-auto
              px-(--spacing-page-x)
              py-(--spacing-page-y)
            "
          >
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}