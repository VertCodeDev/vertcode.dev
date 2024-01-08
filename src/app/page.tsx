import HeroSection from "@/components/landing/HeroSection";
import PartnerSection from "@/components/landing/PartnerSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import OurWorkSection from "@/components/landing/OurWorkSection";
import {getPartners, getProjects} from "@/util/utils";

export default async function Home() {
    const projects = await getProjects();
    const partners = await  getPartners();

    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <PartnerSection
                partners={partners}
            />
            <AboutSection/>
            <ServicesSection/>
            <OurWorkSection
                projects={projects}
            />
        </main>
    )
}
