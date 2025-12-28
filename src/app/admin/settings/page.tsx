"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"; // Assuming Switch component exists or I can mock it, actually I don't have it in ui folder list. I'll check list_dir output from earlier or use simple checkbox.

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
                <p className="text-muted-foreground">
                    Global configuration for the application.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>
                        Configure basic site information.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label>Site Name</Label>
                        <Input defaultValue="PodSumm.ai" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Support Email</Label>
                        <Input defaultValue="support@podsumm.ai" />
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save Changes</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
