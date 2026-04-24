import { Link } from "react-router-dom";
import { Signal } from "lucide-react";

export default function Homebutton() {
    return (
        < Link
            to="/"
            className="flex items-center gap-4 bg-amber-50 dark:bg-blue-900 py-2 px-4 rounded-2xl interface-transition hover:duration-300 hover:bg-accent-hover" >
            <Signal className="text-text interface-transition" />
            <p className="text-text interface-transition">Bit a Bit</p>
        </Link >
    )
}