import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <PartnerSection/>
        </main>
    )
}
