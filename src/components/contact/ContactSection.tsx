import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
    return (
        <section className="w-full py-8">
            <h1 className="text-5xl font-light text-center uppercase">
                <span className="underline underline-offset-4 decoration-red-600">Let&apos;s Work</span> Together
            </h1>
            <div className="max-w-[500px] mt-[1.5rem] mx-auto">
                <p className="text-center text-xl font-light">
                    We would love to work with you! If you are interested in working with us, please fill out the form.
                </p>
            </div>
            <ContactForm/>
        </section>
    )
}