"use client"

import { LayoutGrid, Activity, Settings } from "lucide-react"
import { NavLink } from "react-router"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { name: "Stats", href: "/statistics", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function BottomNav() {
  return (
    // 'pb-safe' is important for iPhones with home indicators
    // We use typical dark mode colors that match your design
    <nav className="pb-safe fixed right-0 bottom-0 left-0 z-50 flex h-20 items-center justify-between bg-[#13161b] px-4 pt-2 md:hidden">
      {navItems.map((item) => {
        return (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 transition-colors",
                isActive
                  ? "bg-[#1a3031] text-[#00e5a3]" // Active state: Teal text and dark teal background
                  : "text-muted-foreground hover:text-foreground" // Inactive state
              )
            }
          >
            <item.icon className="h-6 w-6"  />
            <span className="text-[10px] font-medium tracking-wide">
              {item.name}
            </span>
          </NavLink>
        )
      })}
    </nav>
  )
}
