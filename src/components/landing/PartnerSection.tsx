import Marquee from "react-fast-marquee";
import {classNames} from "@/util/css";
import Image from "next/image";
import {Partner} from "@/util/types";
import {BiLoader} from "react-icons/bi";

interface PartnerProps {

    partners: Partner[];

}

export default function PartnerSection({partners}: PartnerProps) {
    return (
        <section className="bg-[#FCFCFC] w-full py-8" id="partners">
            <div className="text-center">
                <h2 className="text-xl text-red-600">
                    Our Trusted Partners
                </h2>
            </div>
            <div className="container mx-auto px.1 mt-12">
                {
                    !partners.length && (
                        <div className="flex justify-center items-center flex-1">
                           <BiLoader className="animate-spin text-4xl mx-auto"/>
                        </div>
                    )
                }
                <Marquee
                    autoFill={true}
                >
                    {
                        partners.map((partner, index) => (
                            <div
                                key={index}
                                className={classNames(
                                    'flex max-w-[200px] max-h-[100px] px-4 mx-8',
                                    'filter grayscale',
                                    partner.invertColors && 'filter invert',
                                )}
                            >
                                <a
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-full"
                                    aria-label={partner.name}
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_CDN_URL}${partner.logo.url}`}
                                        alt={partner.name}
                                        className='w-full h-full object-contain !relative'
                                        layout='fill'
                                    />
                                </a>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    )
}