export const mockUsers = [
    {
        id: "u1",
        name: "Alex Rivera",
        email: "alex@example.com",
        role: "User",
        plan: "Free",
        status: "Active",
        joinedDate: "2024-12-01",
    },
    {
        id: "u2",
        name: "Sarah Chen",
        email: "sarah@example.com",
        role: "User",
        plan: "Pro",
        status: "Active",
        joinedDate: "2024-11-15",
    },
    {
        id: "u3",
        name: "David Kim",
        email: "david@example.com",
        role: "Admin",
        plan: "Enterprise",
        status: "Active",
        joinedDate: "2024-10-20",
    },
    {
        id: "u4",
        name: "Emily Weiss",
        email: "emily@example.com",
        role: "User",
        plan: "Pro",
        status: "Suspended",
        joinedDate: "2024-12-05",
    },
    {
        id: "u5",
        name: "Mark Johnson",
        email: "mark@example.com",
        role: "User",
        plan: "Free",
        status: "Active",
        joinedDate: "2024-12-10",
    },
];

export const mockSummaries = [
    {
        id: "s1",
        userId: "u1",
        title: "The Future of AI in 2025",
        source: "YouTube",
        duration: "45 min",
        date: "2024-12-20",
        summaryPreview: "Discusses the rapid advancement of LLMs and their impact on creative industries...",
    },
    {
        id: "s2",
        userId: "u2",
        title: "Huberman Lab: Focus & Productivity",
        source: "Spotify",
        duration: "120 min",
        date: "2024-12-22",
        summaryPreview: "Detailed breakdown of dopamine protocols and how to leverage light exposure for better focus...",
    },
    {
        id: "s3",
        userId: "u1",
        title: "Indie Hackers: Building a SaaS",
        source: "Apple Podcasts",
        duration: "60 min",
        date: "2024-12-25",
        summaryPreview: "Interview with a successful bootstrapper sharing insights on marketing and MVP development...",
    },
];

export const mockAdminStats = {
    totalUsers: 12543,
    totalSummaries: 45201,
    activeSubscriptions: 3200,
    revenue: 45000,
};
