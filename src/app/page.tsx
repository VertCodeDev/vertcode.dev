import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <PartnerSection/>
            <AboutSection/>
        </main>
    )
}
