import { type Theme } from "../../hooks/UseTheme";
import Homebutton from "./ui/HomeButton";
import NavigationList from "./ui/NavigationList";

interface NavbarProps {
    theme: Theme;
    toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
    return (
        <nav className="sticky top-0 bg-accent z-50 h-14 w-full flex items-center px-4 interface-transition">
            <Homebutton />
            <NavigationList />
            <button
                onClick={toggleTheme}
                className="bg-accent text-default px-3 py-1 rounded-lg ml-auto"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </nav>
    );
}