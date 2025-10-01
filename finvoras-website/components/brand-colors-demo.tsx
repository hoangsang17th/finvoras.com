"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BrandColorsDemo = () => {
    return (
        <div className="p-8 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-brand-primary mb-2">
                    Finvoras Brand Colors Demo
                </h1>
                <p className="text-brand-neutral-600 dark:text-brand-grey-350">
                    Testing the new color palette from Flutter app
                </p>
            </div>

            {/* Buttons Demo */}
            <Card>
                <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>Different button styles using brand colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                        <Button variant="brand">Brand Primary</Button>
                        <Button variant="brand-outline">Brand Outline</Button>
                        <Button variant="brand-ghost">Brand Ghost</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="info">Info</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Badges Demo */}
            <Card>
                <CardHeader>
                    <CardTitle>Badges & Status</CardTitle>
                    <CardDescription>Status indicators using brand colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                        <Badge className="bg-brand-primary text-white">Primary</Badge>
                        <Badge className="bg-brand-success text-white">Success</Badge>
                        <Badge className="bg-brand-yellow text-white">Warning</Badge>
                        <Badge className="bg-brand-blue text-white">Info</Badge>
                        <Badge className="bg-brand-red text-white">Error</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Color Palette Demo */}
            <Card>
                <CardHeader>
                    <CardTitle>Brand Color Palette</CardTitle>
                    <CardDescription>Primary orange brand colors</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                            <div key={shade} className="text-center">
                                <div
                                    className={`w-12 h-12 rounded-lg mb-1 bg-brand-primary-${shade}`}
                                    title={`brand-primary-${shade}`}
                                />
                                <span className="text-xs">{shade}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Success Color Demo */}
            <Card>
                <CardHeader>
                    <CardTitle>Success Colors</CardTitle>
                    <CardDescription>Green success colors from brand palette</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-5 md:grid-cols-9 gap-2">
                        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                            <div key={shade} className="text-center">
                                <div
                                    className={`w-12 h-12 rounded-lg mb-1 bg-brand-success-${shade}`}
                                    title={`brand-success-${shade}`}
                                />
                                <span className="text-xs">{shade}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Typography Demo */}
            <Card>
                <CardHeader>
                    <CardTitle>Typography with Brand Colors</CardTitle>
                    <CardDescription>Text samples using brand colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-brand-primary">
                            Primary Heading (Orange)
                        </h1>
                        <h2 className="text-xl font-semibold text-brand-neutral-700 dark:text-brand-grey-300">
                            Secondary Heading (Neutral)
                        </h2>
                        <p className="text-brand-neutral-600 dark:text-brand-grey-350">
                            Body text using neutral colors for good readability.
                        </p>
                        <p className="text-brand-success">
                            Success message in green
                        </p>
                        <p className="text-brand-red">
                            Error message in red
                        </p>
                        <p className="text-brand-blue">
                            Info message in blue
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BrandColorsDemo;