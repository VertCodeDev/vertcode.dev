"use client"

import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";

interface NavBarContextType {
    isNavBarOpen: boolean;
    setNavBarOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export function NavBarProvider({children}: { children: ReactNode }) {
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            // If size < 1024px, set isMobile to true
            setIsMobile(window.innerWidth < 1024);
        };

        // Add event listener for resize
        window.addEventListener("resize", handleResize);
        // Call handleResize once to initialize isMobile
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <NavBarContext.Provider
            value={{isNavBarOpen, setNavBarOpen}}
        >
            <div
                {...(isNavBarOpen && isMobile) && {
                    style: {
                        height: "100vh",
                        overflowY: "hidden",
                    }
                }}
            >
                {children}
            </div>
        </NavBarContext.Provider>
    );
}

export function useNavBar(): NavBarContextType {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error("useNavBar must be used within a NavBarProvider");
    }

    return context;
}

export default NavBarContext;
