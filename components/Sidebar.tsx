"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart2, Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const navItems = [
  { name: "Dashboard", icon: Home, id: "dashboard" },
  { name: "Courses", icon: BookOpen, id: "courses" },
  { name: "Analytics", icon: BarChart2, id: "analytics" },
  { name: "Settings", icon: Settings, id: "settings" },
];

function SidebarNav() {
  const searchParams = useSearchParams();
  const activeItem = searchParams.get("tab") || "dashboard";
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 rounded-md bg-card p-2 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu size={24} />
      </button>

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-[#080808] border-r border-border p-4 transition-transform duration-300 md:static md:w-20 lg:w-64 md:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-8 flex items-center justify-center lg:justify-start">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-400" />
          <span className="ml-3 hidden text-xl font-bold lg:block">NextLearn</span>
        </div>

        <ul className="flex flex-1 flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={`/?tab=${item.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "relative flex w-full items-center rounded-xl px-4 py-3 text-sm transition-colors",
                    isActive ? "text-primary-foreground" : "text-gray-400 hover:text-gray-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-accent"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <div className="relative z-10 flex items-center">
                    <item.icon size={20} className="md:mx-auto lg:mx-0" />
                    <span className="ml-3 hidden lg:block">{item.name}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}

export function Sidebar() {
  return (
    <Suspense fallback={<div className="w-20 lg:w-64 bg-[#080808] border-r border-border hidden md:block" />}>
      <SidebarNav />
    </Suspense>
  );
}
