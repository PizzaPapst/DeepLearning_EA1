import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Separator } from "@/components/ui/separator"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-bg-default text-text-default">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex flex-1 items-center justify-between">
              <h1 className="text-lg font-semibold tracking-tight">
                EA1 – Bilderkennung mit ml5.js
              </h1>
              <div className="flex items-center gap-4 text-sm text-text-subinfo">
                <span>Deep Learning</span>
                <Separator orientation="vertical" className="flex-1" />
                <span>Sommersemester 2026</span>
                <Separator orientation="vertical" className="flex-1" />
                <span className="font-medium text-text-default text-base">Maik Bartels</span>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-8">
            <div className="mx-auto max-w-5xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
