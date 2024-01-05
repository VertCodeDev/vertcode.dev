"use client";

import Image from "next/image";
import {classNames, conditionalClassNames} from "@/util/css";
import {GiHamburgerMenu} from "react-icons/gi";
import {HiMiniXMark} from "react-icons/hi2";
import {useNavBar} from "@/context/NavBarContext";
import Link from "next/link";

const navItems = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/#about",
    },
    {
        name: "Services",
        url: "/#services",
    },
    {
        name: "Our Work",
        url: "/#work",
    },
    {
        name: "Contact",
        url: "/contact",
        highlight: true,
    }
]

export default function NavBar() {
    const {isNavBarOpen, setNavBarOpen} = useNavBar();

    return (
        <nav className={conditionalClassNames({
                "h-full w-full lg:h-auto": true,
                "flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-5 lg:space-y-0": true,
                "z-50 py-4 px-6": true,
                "absolute top-0 lg:left-0 -left-full": true,
                "bg-transparent": true,
                "bg-black bg-opacity-75 lg:bg-transparent !left-0": isNavBarOpen,
                "transition-all ease-in-out duration-200": true,
            }
        )}>
            <div
                className="fixed top-0 right-0 lg:hidden cursor-pointer p-2.5 bg-[rgba(0,0,0,.75)] rounded-bl-2xl"
            >
                <button
                    onClick={() => setNavBarOpen(!isNavBarOpen)}
                    className="w-8 h-8 flex justify-center items-center"
                    aria-label="Toggle Navigation Menu"
                >
                    {
                        !isNavBarOpen ? (
                            <GiHamburgerMenu className="w-full h-full text-white"/>
                        ) : (
                            <HiMiniXMark className="w-full h-full text-white"/>
                        )
                    }
                </button>
            </div>
            <div className="w-1/2 lg:w-[125px] max-w-full px-1">
                <Link href={"/"}>
                    <Image
                        src={"/logo-big.png"}
                        alt={"VertCode Development"}
                        className="!relative filter brightness-0 invert"
                        layout="fill"
                    />
                </Link>
            </div>
            <div
                className={classNames(
                    "flex flex-col lg:flex-row flex-wrap items-center space-y-4 lg:space-y-0 lg:space-x-4",
                )}
            >
                {
                    navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className={conditionalClassNames({
                                "text-md px-4 py-1": true,
                                "transition-all ease-in-out duration-200": true,
                                "hover:text-red-400": !item.highlight,
                                "font-light text-white": !item.highlight,
                                "bg-white text-red-600": !!item.highlight,
                                "hover:text-red-500 hover:bg-gray-100": !!item.highlight,
                            })}
                            aria-label={item.name}
                        >
                            {item.name}
                        </a>
                    ))
                }
            </div>
        </nav>
    )
}