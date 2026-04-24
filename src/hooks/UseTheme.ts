import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        // Verifica o localStorage e garante que o retorno seja "light" ou "dark"
        const savedTheme = localStorage.getItem("theme");
        return (savedTheme === "dark" || savedTheme === "light") ? savedTheme : "dark";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
}