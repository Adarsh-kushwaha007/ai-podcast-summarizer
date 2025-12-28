"use client";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { LayoutDashboard, FileText, User, CreditCard } from "lucide-react";

const userNavItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: FileText, label: "My Summaries", href: "/dashboard/summaries" },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
];

export default function UserDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <DashboardSidebar items={userNavItems} role="User" />
            <main className="flex-1 ml-64 p-8 pt-24 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
