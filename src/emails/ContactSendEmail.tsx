import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

interface ContactSendEmailProps {

    name: string;
    subject: string;
    message: string;

}

export function ContactSendEmail({name, subject, message}: ContactSendEmailProps) {
    return (
        <Html>
            <Head/>
            <Preview> Your contact form has been submitted!</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-red-600 rounder my-[40px] mx-auto p-4 w-[465px]">
                        <Section className="mt-4">
                            <Img
                                src={`${baseUrl}/logo-big.png`}
                                alt="VertCode Development"
                                width={200}
                                height="auto"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-center text-2xl mt-4">
                            Contact Form Submission
                        </Heading>
                        <Text className="text-center mt-4">
                            Hello {name},<br/>
                            Thank you for contacting us. We have received your message and will get back to you as soon
                            as possible.
                        </Text>
                        <Hr className="my-4"/>
                        <Text className="text-center mt-4 text-red-600 font-bold">
                            Subject:
                        </Text>
                        <Text className="text-center mt-4">
                            {subject}
                        </Text>
                        <Text className="text-center mt-4 text-red-600 font-bold">
                            Message:
                        </Text>
                        <Text className="text-center mt-4">
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
