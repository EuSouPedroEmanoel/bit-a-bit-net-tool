import Homebutton from "./ui/HomeButton";
import NavigationList from "../../data/NavigationList";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-accent z-50 h-14 w-full flex items-center px-4 interface-transition">
            <Homebutton />
            <NavigationList />
        </nav>
    );
}