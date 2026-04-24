import NavigationButton from "@/components/ui/NavigationButton";

export default function NavigationList() {
    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Calculadora", to: "/ip-calc" },
        { name: "Sobre", to: "/about" },
    ];

    return (
        <div className="flex">
            {navLinks.map((link) => (
                <NavigationButton
                    key={link.to}
                    link={link}
                />
            ))}
        </div>
    );
}