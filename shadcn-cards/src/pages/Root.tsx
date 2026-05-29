import { BottomNav } from "@/components/bottom-nav"
import { Outlet } from "react-router"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import Account from "@/components/account"

export default function Root() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar className="hidden md:block" />
        <SidebarInset>
          <header className="flex justify-between h-8 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:h-16">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="ml-1 hidden md:block" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4 hidden md:block"
              />
              <ModeToggle />
            </div>
            <div className="flex gap-2 px-4">
              <Account />
            </div>
          </header>
          <div className="pb-24 md:pb-0">
          <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <BottomNav />
    </>
  )
}
