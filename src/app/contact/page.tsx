import HeroSection from "@/components/common/HeroSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection title="Contact Us"/>
            <ContactSection/>
        </main>
    );
}