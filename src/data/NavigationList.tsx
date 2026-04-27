import NavigationButton from "@/components/ui/buttons/NavigationButton";

export default function NavigationList() {
    const navLinks = [
        { name: "IPV4", to: "/ipv4" },
        { name: "IPV6", to: "/ipv6" },
        { name: "About", to: "/about" },
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