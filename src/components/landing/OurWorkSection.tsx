import React from "react";
import WorkCarousel from "@/components/landing/work/WorkCarousel";

const FAKE_PROJECTS = [
    {
        id: "7d97b14b-d3cc-4a6d-a397-78c704696b7f",
        name: "MineTrade",
        thumbnail: "https://cdn.vertcodedevelopment.com/work/example1.png",
    },
    {
        id: "b4db002d-935d-4fea-a2b6-68aaa613d228",
        name: "Config Sync",
        thumbnail: "https://cdn.vertcodedevelopment.com/work/example2.png",
    },
    {
        id: "928cf6c9-03f8-4715-bf6e-dcbdd7a7c491",
        name: "InstanceMaster",
        thumbnail: "https://cdn.vertcodedevelopment.com/work/example1.png",
    }
]

export default function OurWorkSection() {
    return (
        <section className="w-full mt-20 py-8" id="work">
            <div className="flex flex-col space-y-5 text-center">
                <h2 className="text-xl text-red-600">
                    Our <span className="underline underline-offset-4 decoration-red-600">Work</span>
                </h2>
                <h1 className="text-5xl capitalize">
                    Check out some of our <span className="text-red-600">work</span><br/> we have done for our clients
                </h1>
            </div>
            <div className="w-full mt-12">
                <WorkCarousel projects={FAKE_PROJECTS}/>
            </div>
        </section>
    );
}