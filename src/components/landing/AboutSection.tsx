import {classNames} from "@/util/css";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="w-full py-8" id="about">
            <div className="bg-[#CD201F] min-w-[275px] w-fit text-end px-3 py-2">
                <h2 className="text-white text-lg">
                    About Us
                </h2>
            </div>
            <div className="container mx-auto py-4 px-2">
                <div className="flex flex-wrap">
                    <div className="flex flex-col space-y-8 w-full lg:w-1/2">
                        <div className="flex flex-col space-y-8">
                            <h1 className="text-6xl max-w-[650px] capitalize">
                                We Build Your Vision with a <span className="text-[#CD201F]">passion</span>
                            </h1>
                            <p className="text-lg font-medium">
                                At VertCode Development, we build your software with a passion for excellence. We
                                specialize
                                in Full Stack Web Development using <span className="text-[#CD201F]">Next.JS</span>,
                                create
                                strong <span className="text-[#CD201F]">desktop applications</span>, and dive into <span
                                className="text-[#CD201F]">Minecraft Server Development</span>. Every line of code
                                reflects
                                our enthusiasm. Choose <span className="text-[#CD201F]">VertCode Development</span> for
                                a
                                dynamic partnership where your vision meets our dedication, resulting in software
                                solutions
                                that go beyond expectations.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl text-[#CD201F]">
                                Our Mission
                            </h2>
                            <p className="text-lg font-medium">
                                Our mission is to provide the best software solutions for our clients. We strive to
                                exceed expectations and deliver the best possible product. We are dedicated to our
                                clients and are always available to help.
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:w-1/2 relative">
                        <div
                            className={classNames(
                                "absolute top-0 right-0 w-[250px] h-full bg-red-700",
                            )}
                        />
                        <div
                            className={classNames(
                                "absolute top-2 -right-2 w-[250px] h-full bg-red-600",
                            )}
                        />
                        <div
                            className={classNames(
                                "absolute top-1/2 -translate-y-1/2 -right-5 w-[450px] h-[250px] max-h-full max-w-full",
                            )}
                        >
                            <Image
                                src="/landing/coding.gif"
                                alt={"Coding"}
                                className="w-full h-full object-cover !relative"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}