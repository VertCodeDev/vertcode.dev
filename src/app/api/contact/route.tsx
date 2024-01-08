import {NextResponse} from "next/server";
import {render} from "@react-email/render";
import {ContactSendEmail} from "@/emails/ContactSendEmail";
import nodemailer from "nodemailer";
import {ContactReceiveEmail} from "@/emails/ContactReceiveEmail";

export async function POST(req: Request) {
    const rawBody = await req.text();
    const {name, email, subject, message, captcha} = JSON.parse(rawBody);
    if (!name || !email || !subject || !message || !captcha) {
        console.log(`Missing required fields: ${rawBody}`)
        return NextResponse.json({
            success: false,
            error: "Please fill out all fields!"
        });
    }

    // Ensure the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({
            success: false,
            error: "Please enter a valid email address!"
        });
    }

    const captchaSuccess = await verifyCaptcha(captcha);
    if (!captchaSuccess) {
        return NextResponse.json({
            success: false,
            error: "Invalid Captcha"
        });
    }

    // Send the email
    const sendEmailHTML = render(
        <ContactSendEmail
            name={name}
            subject={subject}
            message={message}
        />
    );
    const receiveEmailHTML = render(
        <ContactReceiveEmail
            name={name}
            subject={subject}
            message={message}
        />
    );

    await sendEmail("contact@vertcodedevelopment.com", email, sendEmailHTML);
    await sendEmail(email, "wesley@vertcodedevelopment.com", receiveEmailHTML);

    return NextResponse.json({
        success: true
    });
}

function sendEmail(sender: string, receiver: string, emailHTML: string) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER,
            serviceClient: process.env.MAIL_CLIENT_ID,
            privateKey: process.env.MAIL_PRIVATE_KEY!
        }
    });

    return transporter.sendMail({
        from: sender,
        to: receiver,
        subject: "Contact Form Submission",
        html: emailHTML
    });
}

/**
 * Verify the captcha.
 *
 * @param captcha the captcha to verify
 */
async function verifyCaptcha(captcha: string) {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
    });
    const data = await response.json();

    return data.success;
}
