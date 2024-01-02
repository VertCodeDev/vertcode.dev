import {classNames} from "@/util/css";
import TypeWriter from "@/components/landing/hero/TypeWriter";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full bg-[url(/contact/bg-hero.png)] bg-center bg-cover bg-no-repeat">
            <div className={classNames(
                "flex flex-col justify-center items-center space-y-12 px-2",
                "text-white",
                "bg-[#0C0F24] bg-opacity-90 min-h-[350px]"
            )}>
                <div className="text-center">
                    <h1 className="text-5xl">Contact Us</h1>
                    <p className="mt-2.5">
                        We are always ready to help you with your software development needs.
                    </p>
                </div>
            </div>
        </section>
    )
}