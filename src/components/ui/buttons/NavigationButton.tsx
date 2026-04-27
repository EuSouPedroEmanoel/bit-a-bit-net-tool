import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface NavItem {
    name: string;
    to: string;
    node?: ReactNode;
}

interface NavigationButtonProps {
    link: NavItem;
    className?: string;
}

export default function NavigationButton({ link, className }: NavigationButtonProps) {
    return (
        <Link
            to={link.to}
            className={`ml-4 group flex items-center gap-1 transition-colors ${className}`}
        >
            <span className="text-text group-hover:text-text/70 transition-colors">
                {link.name}
            </span>

            {link.node && (
                <span className="text-text group-hover:text-text/70 transition-colors">
                    {link.node}
                </span>
            )}
        </Link>
    );
}