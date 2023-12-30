import {classNames} from "@/util/css";
import Image from "next/image";
import {BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoTwitter} from "react-icons/bi";

const socials = [
    {
        name: "Twitter",
        url: "https://twitter.com/VertCodeDev",
        icon: (<BiLogoTwitter/>),
    },
    {
        name: "GitHub",
        url: "https://github.com/VertCodeDev",
        icon: (<BiLogoGithub/>),
    },
    {
        name: "Instagram",
        url: "https://instagram.com/VertCodeDevelopment",
        icon: (<BiLogoInstagram/>),
    },
    {
        name: "Facebook",
        url: "https://facebook.com/VertCodeDevelopment",
        icon: (<BiLogoFacebook/>),
    }
]

export default function Footer() {
    return (
        <footer className="mt-24 w-full bg-[#181818]">
            <div className={classNames(
                "w-full bg-[url(/bg-footer.png)] bg-center bg-cover bg-no-repeat relative",
                "flex flex-col items-center space-y-4",
            )}>
                <a
                    href="#"
                    className="-top-1/2 -translate-y-1/2 cursor-pointer transition-all ease-in-out duration-200 hover:scale-110 transform"
                >
                    <Image
                        src={"/arrow-up.svg"}
                        alt={"Arrow Up"}
                        width={60}
                        height={60}
                    />
                </a>
                <div className="container mx-auto flex justify-around items-center">
                    <div className="hidden lg:block w-full max-w-[500px] h-[2px] bg-white"/>
                    <div className="bg-white rounded-2xl px-8 py-2.5">
                        <Image
                            src={"/logo-big.png"}
                            alt={"VertCode Development"}
                            className="w-auto max-h-[40px] !relative"
                            layout="fill"
                        />
                    </div>
                    <div className="hidden: lg:block w-full max-w-[500px] h-[2px] bg-white"/>
                </div>
                <div className="container py-5">
                    <div className="flex justify-center flex-wrap">
                        {
                            socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        className="flex items-center px-3 text-white hover:text-red-600 transition-all ease-in-out duration-200">
                                        <div className="text-4xl">
                                            {social.icon}
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="container mx-auto">
                    <hr
                        className="border-[#4F4F4F]"
                    />
                    <p className="py-5 text-center text-white font-light">
                        &copy; {new Date().getFullYear()} VertCode Development (82938652). All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}