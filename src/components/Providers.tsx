"use client";

import {NavBarProvider} from "@/context/NavBarContext";

export default function Providers({children}: { children: React.ReactNode }) {
    return <NavBarProvider>{children}</NavBarProvider>;
}
