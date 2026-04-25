import { type ReactNode } from "react";

interface CardProps {
    img?: {
        ref: string;
        alt: string;
    };
    children: ReactNode;
    link?: ReactNode;
}

export default function Card({ img, children, link }: CardProps) {
    return (
        <div className="card bg-surface/60 hover:bg-surface transition-all duration-500 ease-in-out rounded-2xl hover:scale-[1.02]">
            <div className={`w-full group`}>
                {img && (
                    <img
                        src={img.ref}
                        alt={img.alt}
                        className="w-full rounded-2xl aspect-video object-cover brightness-80 group-hover:brightness-100 group-hover:dark:brightness-90 transition-all duration-500 ease-in-out group-hover:saturate-110"
                    />
                )}
                <div className="px-4">
                    {children}
                </div>

            </div>
            <div className="p-4">
                {link && link}
            </div>
        </div>

    )
}