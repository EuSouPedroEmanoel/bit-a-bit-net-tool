import NavigationButton from "@/components/ui/buttons/NavigationButton";
import Card from "@/components/ui/Card";
import { ArrowRightIcon } from "lucide-react";

const cardData = {
    ref: "https://www.diariodocentrodomundo.com.br/wp-content/uploads/2023/04/internet-1.jpg",
    alt: "An illuminated, translucent blue visualization of planet Earth seen from space, focusing on Europe, Africa, and part of Asia. City lights glow intensely from the landmasses, and numerous curved lines form a complex global network of connections, punctuated by small light points. The background is a dark blue cosmos dotted with stars, with a soft atmospheric glow around the planet's curve."
}

const link = {
    name: "About the project",
    to: "/about",
    node: < ArrowRightIcon />
}

export default function Home() {

    return (
        <main className="flex m-10">
            <article className="flex-1">
                <Card img={cardData} link={<NavigationButton link={link} className="" />}>
                    <h2 className="text-h2 leading-8">
                        Your go-to solution for <span className="span-accent-text">subnet calculations</span>. From host ranges to binary conversion, we have <span className="span-accent-text">everything you need</span> to manage  <span className="span-accent-text">your network</span>.
                    </h2>
                    <hr className="text-default mt-10" />
                </Card>

            </article>
            <aside className="flex-1">

            </aside>
        </main >
    );
}