"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Mic, LayoutDashboard, Users, Settings, FileText, CreditCard, LogOut, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

interface DashboardSidebarProps {
    items: SidebarItem[];
    role: "Admin" | "User";
}

export function DashboardSidebar({ items, role }: DashboardSidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col fixed left-0 top-16 bottom-0 z-40">
            <div className="p-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 to-blue-600">
                        <Mic className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                        PodSumm
                    </span>
                </Link>
                <div className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider px-1">
                    {role} Workspace
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                                    isActive
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                    )}
                                />
                                {item.label}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border mt-auto">
                <Link href="/">
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20">
                        <LogOut className="w-5 h-5 mr-3" />
                        Sign Out
                    </Button>
                </Link>
            </div>
        </aside>
    );
}
