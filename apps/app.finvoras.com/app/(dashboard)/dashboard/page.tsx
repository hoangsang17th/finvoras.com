"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HttpError } from "@repo/http-client";
import { userApi } from "@/lib/api/user";
import { UserProfile } from "@/lib/types";

export default function DashboardPage() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function loadProfile() {
            try {
                const profile = await userApi.getProfile();
                setUser(profile);
            } catch (error) {
                console.error("Failed to load profile", error);
                if (error instanceof HttpError && error.status === 401) {
                    router.push("/login");
                    return;
                }
                setError("We couldn't load your profile. Please try again.");
            } finally {
                setLoading(false);
            }
        }
        loadProfile();
    }, [router]);

    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-4">Welcome to App Dashboard</h1>
            {user && (
                <div className="card bg-base-100 shadow-xl p-8 border rounded-xl bg-card text-card-foreground space-y-2">
                    <p className="text-xl font-medium">Hello, {user.fullName || user.email}</p>
                    <p className="text-muted-foreground">Email: {user.email}</p>
                    <p className="text-muted-foreground">User ID: {user.uuid}</p>
                    {user.userProfile?.avatar && (
                        <p className="text-muted-foreground">Avatar: {user.userProfile.avatar}</p>
                    )}
                </div>
            )}
            {!user && !error && (
                <p className="text-xl text-red-500">
                    Failed to load user profile. Are you logged in?
                </p>
            )}
            {error && <p className="text-base text-red-500">{error}</p>}
        </div>
    );
}
