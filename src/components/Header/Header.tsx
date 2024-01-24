"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Wrapper } from "../common";
import { DesktopMenu, MobileMenu, MobileMenuToggler } from ".";

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden";
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.body.style.overflow = "visible";
        }
    }, [toggleMenu]);

    return (
        <Wrapper extraClasses="relative">
            <header className="px-[24px] md:px-0">
                <div className="flex items-center justify-between pt-[39px] pb-[37px] md:pt-[64px] md:pb-[67px] bg-white">
                    <Image
                        src="/assets/shared/desktop/logo-dark.png"
                        alt="designo logo light"
                        width={202}
                        height={27}
                    />
                    <MobileMenuToggler
                        toggleMenu={toggleMenu}
                        handleToggleMenu={handleToggleMenu}
                    />
                    <DesktopMenu />
                </div>
            </header>
            <MobileMenu toggleMenu={toggleMenu} />
        </Wrapper>
    );
};
