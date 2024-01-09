"use client";

import {NavBarProvider} from "@/context/NavBarContext";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {ReactNode} from "react";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <NavBarProvider>
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "NOT_SET"}
                scriptProps={{
                    async: true,
                    defer: true
                }}
            >
                {children}
            </GoogleReCaptchaProvider>
        </NavBarProvider>
    );
}
