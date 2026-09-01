import Header from "@/components/navigation/Header/Header";
import MobileSidebar from "@/components/navigation/Sidebar/MobileSidebar";
import Sidebar from "@/components/navigation/Sidebar/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <MobileSidebar />
        
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />

          <main
            className=" min-w-0 flex-1 px-(--spacing-page-x) py-(--spacing-page-y) "
          >
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
