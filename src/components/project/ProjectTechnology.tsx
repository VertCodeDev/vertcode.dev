import {Technology} from "@/util/types";
import Image from "next/image";

interface ProjectTechnologyProps {

    technology: string | Technology;

}

export default function ProjectTechnology({technology}: ProjectTechnologyProps) {
    if (typeof technology === "string") {
        return (<></>);
    }

    return (
        <div className="p-2 relative group mx-2">
            <div
                className="w-16 h-16 p-2 rounded-2xl"
                style={{
                    backgroundColor: technology.bgColor,
                }}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}${technology.icon.url}`}
                    alt={technology.name}
                    aria-label={technology.name}
                    layout="fill"
                    className="!w-full !h-full !object-contain !relative"
                />
            </div>
        </div>
    )
}