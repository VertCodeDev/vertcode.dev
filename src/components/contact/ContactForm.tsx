"use client";

import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import {FormEvent, useState} from "react";
import {ContactAPIResponse} from "@/util/types";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {BiErrorCircle, BiLoader} from "react-icons/bi";
import {conditionalClassNames} from "@/util/css";

export default function ContactForm() {
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState<ContactAPIResponse | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    /**
     * Handles the form submission.
     *
     * @param event The form submission event
     */
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Clear the response state
        setResponse(null);
        // First we cancel the default form submission behavior
        event.preventDefault();

        if (!executeRecaptcha) {
            setResponse({
                success: false,
                error: "Recaptcha not initialized"
            })
            return;
        }

        // Set the isSubmitting state to true
        setIsSubmitting(true);

        const captcha = await executeRecaptcha();
        // Now we verify that the user has completed the captcha
        if (!captcha) {
            // Set response state
            setResponse({
                success: false,
                error: "Captcha not completed"
            });

            // Reset the isSubmitting state
            setIsSubmitting(false);
            return;
        }

        const data = {
            name,
            email,
            subject,
            message,
            captcha
        };

        // Send a request to the server to send the email
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        }).then((response: ContactAPIResponse) => {
            if (response.success) {
                // Set response state
                setResponse(response);
                return;
            }

            // Set response state
            setResponse(response);
        }).catch(() => {
            // Set response state
            setResponse({
                success: false,
                error: "An unknown error occurred"
            });
        }).finally(() => {
            // Reset the isSubmitting state
            setIsSubmitting(false);
            // After 5 seconds, reset the response state
            setTimeout(() => setResponse(null), 5000);
        });
    }

    return (
        <form
            className="container mx-auto mt-16 px-2"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-wrap">
                <div className="flex w-full lg:w-1/2 py-5 px-2.5">
                    <Input
                        label="Name"
                        type="text"
                        required={true}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="flex w-full lg:w-1/2 py-5 px-2.5">
                    <Input
                        label="Email"
                        type="email"
                        required={true}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex w-full lg:w-1/2 py-5 px-2.5">
                    <Input
                        label="Subject"
                        type="text"
                        required={true}
                        onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <div className="flex w-full py-5 px-2.5">
                    <TextArea
                        label="Message"
                        required={true}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <div className="flex w-full py-5 px-2.5">
                    <button
                        className={conditionalClassNames({
                            "w-full py-2 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-all duration-200 ease-in-out": true,
                            "opacity-50 cursor-not-allowed": isSubmitting,
                            "animate-bounce": response !== null && !response.success
                        })}
                        aria-label="Send Message"
                    >
                        {
                            isSubmitting && (
                                <>
                                    <BiLoader className="inline-block animate-spin mr-2"/>
                                    Sending...
                                </>
                            )
                        }
                        {
                            response && !response.success ? (
                                <>
                                    <BiErrorCircle className="inline-block mr-2"/>
                                    {response.error}
                                </>
                            ) : (
                                "Send Message"
                            )
                        }
                    </button>
                </div>
            </div>
        </form>
    )
}