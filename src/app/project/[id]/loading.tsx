import HeroSection from "@/components/common/HeroSection";
import {BiLoader} from "react-icons/bi";

export default async function LoadingPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection title="Project Information"/>
            <div className="flex justify-center items-center flex-1">
                <BiLoader className="animate-spin text-6xl mx-auto"/>
            </div>
        </main>
    );
}