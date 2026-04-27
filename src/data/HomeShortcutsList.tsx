import NavigationButton from "@/components/ui/buttons/NavigationButton";

export default function HomeShortcutList() {
    const navLinks = [
        { name: "Explore IPv4 calculator", to: "/ipv4" },
        { name: "Explore IPv6 calculator", to: "/ipv6" },
        { name: "Your Public IP", to: "/about" },
    ];

    return (
        <div className="flex flex-col gap-4 ml-0 mr-4 my-4 mb-5 w-[95%]">
            {navLinks.map((link) => (
                <NavigationButton className="button"
                    key={link.to}
                    link={link}
                />
            ))}
        </div>
    );
}