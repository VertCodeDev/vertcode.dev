import {classNames} from "@/util/css";
import React from "react";

interface ServiceCardProps {

    service: {
        name: string;
        description: string;
        icon: React.ReactNode;
    }

}

export default function ServiceCard({service}: ServiceCardProps) {
    return (
        <div className={classNames(
            "w-full xl:w-1/4 my-4",
        )}>
            <div className={classNames(
                "bg-white rounded-lg shadow-lg p-4",
                "h-full flex flex-col items-center space-y-4",
                "border-2 border-red-600"
            )}>
                <div
                    className="text-6xl p-3 rounded-2xl"
                >
                    {service.icon}
                </div>
                <div className="flex flex-col space-y-2 text-center">
                    <h3 className="text-2xl">
                        {service.name}
                    </h3>
                    <p className="text-center font-light">
                        {
                            service.description.split("**").map((text, index) => (
                                <React.Fragment key={index}>
                                    {index % 2 === 0 ? text : (
                                        <span className="text-red-600">
                                            {text}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}