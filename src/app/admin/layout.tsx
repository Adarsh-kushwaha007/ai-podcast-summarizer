"use client";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { LayoutDashboard, Users, MessageSquare, Settings } from "lucide-react";

const adminNavItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: MessageSquare, label: "Feedback", href: "/admin/feedback" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <DashboardSidebar items={adminNavItems} role="Admin" />
            <main className="flex-1 ml-64 p-8 pt-24 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
