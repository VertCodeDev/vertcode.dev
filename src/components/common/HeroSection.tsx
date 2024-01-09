import {classNames} from "@/util/css";
import TypeWriter from "@/components/landing/hero/TypeWriter";
import Link from "next/link";

interface HeroSectionProps {

    title: string;

}

export default function HeroSection({title}: HeroSectionProps) {
    return (
        <section className="w-full bg-[url(/contact/bg-hero.webp)] bg-center bg-cover bg-no-repeat" id="hero">
            <div className={classNames(
                "flex flex-col justify-center items-center space-y-12 px-2",
                "text-white",
                "bg-[#0C0F24] bg-opacity-90 min-h-[275px]"
            )}>
                <h1 className="text-center text-5xl">{title}</h1>
            </div>
        </section>
    )
}