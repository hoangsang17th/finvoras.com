import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthDemoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-primary/5 via-background to-brand-success/5 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Authentication Demo</h1>
                    <p className="text-brand-neutral-600 dark:text-brand-grey-350 text-lg">
                        Test the login and registration forms with Finvoras brand styling
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Login Demo */}
                    <Card className="shadow-xl border-0">
                        <CardHeader className="text-center">
                            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-lg font-bold text-white">L</span>
                            </div>
                            <CardTitle className="text-xl">Login Page</CardTitle>
                            <CardDescription>
                                Secure login form with email/password authentication
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-sm font-medium">Features:</p>
                                <ul className="text-sm text-brand-neutral-600 space-y-1">
                                    <li>• Email validation</li>
                                    <li>• Password visibility toggle</li>
                                    <li>• Remember me option</li>
                                    <li>• Forgot password link</li>
                                    <li>• Loading states</li>
                                    <li>• Error handling</li>
                                </ul>
                            </div>
                            <Button variant="brand" className="w-full" asChild>
                                <Link href="/login">
                                    Test Login Form
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Register Demo */}
                    <Card className="shadow-xl border-0">
                        <CardHeader className="text-center">
                            <div className="w-12 h-12 bg-brand-success rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-lg font-bold text-white">R</span>
                            </div>
                            <CardTitle className="text-xl">Register Page</CardTitle>
                            <CardDescription>
                                Complete registration form with validation
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-sm font-medium">Features:</p>
                                <ul className="text-sm text-brand-neutral-600 space-y-1">
                                    <li>• Full name field</li>
                                    <li>• Email validation</li>
                                    <li>• Password strength check</li>
                                    <li>• Password confirmation</li>
                                    <li>• Terms & conditions</li>
                                    <li>• Comprehensive validation</li>
                                </ul>
                            </div>
                            <Button variant="brand-outline" className="w-full" asChild>
                                <Link href="/register">
                                    Test Register Form
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Brand Colors Demo */}
                <Card className="mt-8 shadow-xl border-0">
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Brand Color System</CardTitle>
                        <CardDescription>
                            Consistent color usage across authentication forms
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-2"></div>
                                <p className="text-sm font-medium">Primary</p>
                                <p className="text-xs text-brand-neutral-500">#FFA500</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-success rounded-lg mx-auto mb-2"></div>
                                <p className="text-sm font-medium">Success</p>
                                <p className="text-xs text-brand-neutral-500">#58CB24</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-lg mx-auto mb-2"></div>
                                <p className="text-sm font-medium">Error</p>
                                <p className="text-xs text-brand-neutral-500">#FF222E</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-blue rounded-lg mx-auto mb-2"></div>
                                <p className="text-sm font-medium">Info</p>
                                <p className="text-xs text-brand-neutral-500">#4096FF</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Navigation */}
                <div className="text-center mt-8">
                    <Button variant="ghost" asChild>
                        <Link href="/">
                            ← Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}