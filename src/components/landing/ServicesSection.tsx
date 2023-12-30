import {classNames} from "@/util/css";
import ServiceCard from "@/components/landing/services/ServiceCard";
import React from "react";
import {MdDevicesOther} from "react-icons/md";
import {FaComputer} from "react-icons/fa6";
import {TbBrandMinecraft} from "react-icons/tb";

const services = [
    {
        name: "Full Stack Web Development",
        description: "We specialize in **Full Stack** Web Development using **Next.JS**. We can create a custom website for your business or organization.",
        icon: (<MdDevicesOther/>)
    },
    {
        name: "Desktop Applications",
        description: "We specialize in creating **desktop applications** using **Tauri**. We can create a custom desktop application for your business or organization.",
        icon: (<FaComputer/>)
    },
    {
        name: "Minecraft Server Development",
        description: "We specialize in **Minecraft Server Development**. We can create custom **plugins**, **models**, and **more** for your Minecraft server.",
        icon: (<TbBrandMinecraft/>)
    }
];

export default function ServicesSection() {
    return (
        <section className="w-full py-8 relative">
            <div className="w-full">
                <div className="flex flex-col space-y-5 text-center">
                    <h2 className="text-xl text-red-600">
                        Our <span className="underline underline-offset-4 decoration-red-600">Services</span>
                    </h2>
                    <h1 className="text-5xl capitalize">
                        We provide <span className="text-red-600">high quality</span><br/>services for our clients
                    </h1>
                </div>
                <div className="container mx-auto px-2 py-8">
                    <div className="flex flex-wrap justify-around">
                        {
                            services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    service={service}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={classNames(
                "w-[500px] h-[500px]",
                "hidden xl:block",
                "bg-red-600 -z-10 opacity-10",
                "absolute top-0 left-0 rotate-45 -translate-x-1/2"
            )}/>
            <div className={classNames(
                "w-[500px] h-[500px]",
                "hidden xl:block",
                "bg-red-600 -z-10 opacity-10",
                "absolute top-0 right-0 rotate-45 translate-x-1/2 translate-y-1/2"
            )}/>
        </section>
    );
}