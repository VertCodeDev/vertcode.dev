import Link from "next/link";
import {classNames} from "@/util/css";
import TypeWriter from "@/components/hero/TypeWriter";

export default function HeroSection() {
    return (
        <section className="w-full bg-[url(/bg-hero.png)] bg-center bg-cover bg-no-repeat">
            <div className={classNames(
                "flex flex-col justify-center items-center space-y-12 px-2",
                "text-white",
                "bg-gradient-radial from-0 from-transparent to-100% to-[rgba(255,0,0,.5)] min-h-[450px]"
            )}>
                <div className="text-center">
                    <h1 className="text-5xl">Develop your Software With</h1>
                    <h1 className="text-5xl underline underline-offset-8">
                        <TypeWriter
                            sequences={[
                                "VertCode Development",
                                "Experienced Developers"
                            ]}
                        />
                    </h1>
                </div>
                <Link href="/contact" className={classNames(
                    "px-5 py-2",
                    "border-2 border-white rounded",
                    "transition-all duration-200 ease-in-out",
                    "hover:bg-white hover:text-black"
                )}>
                    Contact Us
                </Link>
            </div>
        </section>
    );
}