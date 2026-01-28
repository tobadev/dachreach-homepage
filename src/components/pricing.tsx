'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Check, Plus } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    const BASE_CREDITS = 3000
    const MAX_CREDITS = 50000
    const STEP = 1000
    const RATE_PER_CREDIT_EUR = 79 / BASE_CREDITS

    const [credits, setCredits] = React.useState(BASE_CREDITS)

    const cost = React.useMemo(() => credits * RATE_PER_CREDIT_EUR, [credits])

    const formatNumber = React.useCallback((value: number) => new Intl.NumberFormat('en-US').format(value), [])
    const formatCurrency = React.useCallback(
        (value: number) =>
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
            }).format(value),
        [],
    )

    return (
        <section id="pricing" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-sm font-medium">Pro</h2>
                                <span className="my-3 block text-2xl font-semibold">€79 / user / month</span>
                                <p className="text-muted-foreground text-sm">For: Solo founders, freelancers, small agencies</p>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="">Get Started</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <div className="text-sm font-medium">Includes:</div>
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'DACH company discovery',
                                    'Impressum data extraction',
                                    'Filters',
                                    'CSV export',
                                    '1,000 credits / month',
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">Business</h2>
                                    <span className="my-3 block text-2xl font-semibold">€199 / user / month</span>
                                    <p className="text-muted-foreground text-sm">For: Agencies & sales teams</p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="">Get Started</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium">Includes:</div>

                                <ul className="mt-4 list-outside space-y-3 text-sm">
                                    {[
                                        'Everything in Pro',
                                        'Impressum data extraction',
                                        'Advanced filters (industry, region, size, keywords)',
                                        '3,000 credits / month',
                                        'Bulk export (CSV / Excel)',
                                        'Team access',
                                        'API access',
                                        'Lead scoring',
                                        'Saved searches & lead lists',
                                        'Priority support',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            {item === 'Everything in Pro' ? <Plus className="size-3" /> : <Check className="size-3" />}
                                            {item === 'Everything in Pro' ? `+ ${item}` : item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-(--radius) mt-6 flex flex-col space-y-8 border p-6 lg:p-10 md:flex-row md:items-start md:justify-between md:gap-10 md:space-y-0">
                    <div className="space-y-6 md:max-w-sm">
                        <div>
                            <h2 className="text-sm font-medium">Credits</h2>
                            <p className="text-muted-foreground mt-2 text-sm">Choose how many credits you need. Starts at 3,000.</p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div className="text-2xl font-semibold md:text-3xl">{formatCurrency(cost)}</div>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full sm:w-auto">
                                    <Link href="">Buy {formatNumber(credits)} Credits</Link>
                                </Button>
                            </div>
                            <input
                                aria-label="Credits slider"
                                type="range"
                                min={BASE_CREDITS}
                                max={MAX_CREDITS}
                                step={STEP}
                                value={credits}
                                onChange={(e) => setCredits(Number(e.target.value))}
                                className="w-full accent-foreground"
                            />
                            <div className="text-muted-foreground flex items-center justify-between text-xs">
                                <span>{formatNumber(BASE_CREDITS)}</span>
                                <span>{formatNumber(MAX_CREDITS)}</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex-1">
                        <div className="text-muted-foreground max-w-xl space-y-2 text-sm">
                            <p className="text-foreground font-medium">How credits work</p>
                            <p>Each company processed uses credits. Your balance rolls over during the billing period.</p>
                            <p>Both Pro and Business include credits every month to get you started.</p>
                            <p>If you need more credits, you can purchase a top-up anytime without adding seats.</p>
                            <p>Top-ups are ideal for seasonal campaigns or larger one-off searches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

