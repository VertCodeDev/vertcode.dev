"use client";

import {InputHTMLAttributes, useState} from "react";
import {classNames, conditionalClassNames} from "@/util/css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

    label: string;
    id: string;
    required: boolean;

}

export default function Input({label, required, ...props}: InputProps) {
    const [value, setValue] = useState("");

    return (
        <div className="relative flex flex-col space-y-1 group w-full">
            <label
                className={conditionalClassNames({
                    [classNames(
                        "absolute top-1/2 transform -translate-y-1/2",
                        "group-focus-within:translate-y-0 group-focus-within:-top-5",
                        "transition-all duration-200 ease-in-out",
                        "font-medium",
                        "text-gray-400 group-focus-within:text-gray-600 -z-10"
                    )]: true,
                    "!translate-y-0 !-top-5 text-gray-600": value.length > 0
                })}
                htmlFor={props.id}
            >
                {label}
                {required && (
                    <span className="text-red-600">
                        *
                    </span>
                )}
            </label>
            <input
                className={classNames(
                    "transition-all duration-200 ease-in-out",
                    "border-b-2 border-gray-400 outline-none",
                    "focus:border-red-600 hover:border-red-600",
                    "focus:outline-none hover:outline-none focus:ring-0",
                    "pe-2 py-2 bg-transparent"
                )}
                onBlur={e => setValue(e.target.value)}
                name={props.id}
                {...props}
            />
        </div>
    )
}