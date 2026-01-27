import { Logo } from '@/components/logo'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const links = [
    {
        title: 'Features',
        href: '#features',
    },
    {
        title: 'How it works',
        href: '#how-it-works',
    },
    {
        title: 'Pricing',
        href: '#pricing',
    },
    {
        title: 'FAQ',
        href: '#faq',
    },
    {
        title: 'Legal',
        href: '#faq',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Logo />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <Facebook className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                        <Linkedin className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <Instagram className="size-6" />
                    </Link>
                    <Link
                        href="mailto:hello@dachreach.com"
                        aria-label="Email"
                        className="text-muted-foreground hover:text-primary block">
                        <Mail className="size-6" />
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm">&copy; {new Date().getFullYear()} dachreach.com, All rights reserved</span>
            </div>
        </footer>
    )
}

