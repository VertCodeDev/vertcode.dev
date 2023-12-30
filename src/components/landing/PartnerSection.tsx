import Marquee from "react-fast-marquee";
import {classNames} from "@/util/css";
import Image from "next/image";

const partners = [
    {
        name: 'Tebex',
        url: 'https://tebex.io',
        logo: '/partners/tebex.png',
        invertColor: true
    },
    {
        name: 'Codiq',
        url: 'https://xcodiq.com',
        logo: '/partners/xcodiq.webp'
    }
];

export default function PartnerSection() {
    return (
        <section className="bg-[#FCFCFC] w-full py-8">
            <div className="text-center">
                <h2 className="text-xl text-red-600">
                    Our Trusted Partners
                </h2>
            </div>
            <div className="container mx-auto px.1 mt-12">
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
                                    partner.invertColor && 'filter invert',
                                )}
                            >
                                <a
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={partner.logo}
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