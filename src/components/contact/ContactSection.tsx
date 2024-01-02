import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";

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
            <form className="container mx-auto mt-16 px-2">
                <div className="flex flex-wrap">
                    <div className="flex w-full lg:w-1/2 py-5 px-2.5">
                        <Input
                            label="Name"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/2 py-5 px-2.5">
                        <Input
                            label="Email"
                            type="email"
                            required={true}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/2 py-5 px-2.5">
                        <Input
                            label="Subject"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div className="flex w-full py-5 px-2.5">
                        <TextArea
                            label="Message"
                            required={true}
                        />
                    </div>
                    <div className="flex w-full py-5 px-2.5">
                        <button
                            className="w-full py-2 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-all duration-200 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}