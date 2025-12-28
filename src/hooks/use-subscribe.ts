"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useSubscribe() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubscribe = async (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault();
        }

        if (!email) {
            toast.error("Please enter your email address.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setEmail("");
            toast.success("Successfully subscribed!");
        }, 1500);
    };

    return {
        email,
        setEmail,
        handleSubscribe,
        isLoading,
    };
}
