import {NextResponse} from "next/server";

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
    // TODO: Implement this

    return NextResponse.json({
        success: true
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
