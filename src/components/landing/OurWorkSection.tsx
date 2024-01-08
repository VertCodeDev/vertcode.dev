"use client";

import React from "react";
import WorkCarousel from "@/components/landing/work/WorkCarousel";
import {Project} from "@/util/types";
import {BiLoader} from "react-icons/bi";


interface OurWorkSectionProps {
    projects: Project[];
}

export default function OurWorkSection({projects}: OurWorkSectionProps) {
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
                {
                    !projects.length && (
                        <div className="flex justify-center items-center flex-1">
                            <BiLoader className="animate-spin text-4xl mx-auto"/>
                        </div>
                    )
                }
                <WorkCarousel projects={projects}/>
            </div>
        </section>
    );
}