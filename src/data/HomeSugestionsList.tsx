import NavigationButton from "@/components/ui/buttons/NavigationButton";

export default function HomeShortcutList() {
    const navLinks = [
        { name: "Your Public IP", to: "/about" },
        { name: "2001:db8:85a3::8a2e:370:7334", to: "/ipv6" },
        { name: "192.168.1.15/24", to: "/ipv4" },
    ];

    return (
        <div className="flex items-center justify-center gap-4 mb-4">
            {navLinks.map((link) => (
                <NavigationButton
                    key={link.to}
                    link={link}
                />
            ))}
        </div>
    );
}