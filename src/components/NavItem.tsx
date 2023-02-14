import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react';
import clsx from 'clsx'

interface NavItemProps {
    href: string;
    children: React.ReactNode;
}

export function MobileNavItem({ href, children }: NavItemProps) {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    )
}

export function NavItem({ href, children }: NavItemProps) {
    let isActive = useRouter().pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'hover:text-teal-500 dark:hover:text-teal-400'
                )}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
            </Link>
        </li>
    )
}