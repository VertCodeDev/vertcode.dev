import React from "react";


export default function OurWorkSection() {
    return (
        <section className="w-full mt-20 py-8">
            <div className="flex flex-col space-y-5 text-center">
                <h2 className="text-xl text-red-600">
                    Our <span className="underline underline-offset-4 decoration-red-600">Work</span>
                </h2>
                <h1 className="text-5xl capitalize">
                    Check out some of our <span className="text-red-600">work</span><br/> we have done for our clients
                </h1>
            </div>
        </section>
    );
}