import { Link } from "react-router-dom";

export interface NavItem {
    name: string;
    to: string;
}

interface NavigationButtonProps {
    link: NavItem;
}

export default function NavigationButton({ link }: NavigationButtonProps) {
    return (
        <div className="ml-4">
            <Link
                to={link.to}
                className="text-text hover:text-text/70 transition-colors"
            >
                {link.name}
            </Link>
        </div>
    );
}