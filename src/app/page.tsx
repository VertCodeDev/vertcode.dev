import HeroSection from "@/components/landing/HeroSection";
import PartnerSection from "@/components/landing/PartnerSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import OurWorkSection from "@/components/landing/OurWorkSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <PartnerSection/>
            <AboutSection/>
            <ServicesSection/>
            <OurWorkSection/>
        </main>
    )
}
