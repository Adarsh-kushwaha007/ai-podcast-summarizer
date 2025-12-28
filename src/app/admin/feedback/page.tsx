"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminFeedbackPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
                <p className="text-muted-foreground">
                    User feedback and feature requests.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-sm">John Doe</span>
                                    <Badge variant="outline">Feature Request</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    "It would be great if we could export summaries to Notion directly. The current PDF export is good but Notion integration would be a game changer."
                                </p>
                                <div className="mt-2 text-xs text-muted-foreground">
                                    2 days ago
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
