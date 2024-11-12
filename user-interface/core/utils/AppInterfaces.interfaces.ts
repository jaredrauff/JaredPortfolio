import type { ComponentChildren } from "preact";

export interface ComponentItem {
    title: string;
    href: string;
    description: string;
}

export interface ListItemProps {
    className?: string;
    title: string;
    children: ComponentChildren;
    href: string;
}