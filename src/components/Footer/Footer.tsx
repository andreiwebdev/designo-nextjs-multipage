import Image from "next/image";
import { Button, Wrapper } from "../common";
import Link from "next/link";
import {
    IoLogoFacebook,
    IoLogoPinterest,
    IoLogoInstagram,
} from "react-icons/io";
import { RiYoutubeLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="w-full bg-black">
            <Wrapper extraClasses="text-center px-[24px] md:px-[0px] pt-[253px] pb-[64px] relative">
                <div className="w-full px-6 py-16 bg-peach text-center rounded-[15px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%] md:text-left md:flex md:items-center md:justify-between md:px-[92px] md:py-[72px]">
                    <div>
                        <div className="text-white text-3xl mb-2 max-w-[279px] mx-auto font-medium md:text-4xl md:mx-0">
                            Let’s talk about your project
                        </div>
                        <p className="text-white text-sm mb-[32px] max-w-[279px] mx-auto md:max-w-[459px] md:mx-0">
                            Ready to take it to the next level? Contact us today
                            and find out how our expertise can help your
                            business grow.
                        </p>
                    </div>
                    <Button
                        buttonText="GET IN TOUCH"
                        style="light"
                        extraClasses="mx-auto md:ml-auto md:mr-0"
                    />
                </div>
                <div className="md:flex md:items-center md:justify-between md:mb-10">
                    <Image
                        src="/assets/shared/desktop/logo-light.png"
                        alt="designo logo light"
                        className="mx-auto mb-[32px] md:m-0"
                        width={202}
                        height={27}
                    />
                    <div className="w-full h-[1px] bg-white opacity-[0.1] mb-8 md:hidden"></div>
                    <ul className="list-none text-white text-[14px] uppercase tracking-[2px] leading-[14px] mb-[40px] md:flex md:mb-0 md:gap-11">
                        <li className="mb-[32px] md:mb-0 border border-black hover:border-b-white">
                            <Link href="/our-company">Our Company</Link>
                        </li>
                        <li className="mb-[32px] md:mb-0 border border-black hover:border-b-white">
                            <Link href="/locations">Locations</Link>
                        </li>
                        <li className="mb-[32px] md:mb-0 border border-black hover:border-b-white">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-[1px] bg-white opacity-[0.1] mb-8 hidden md:block"></div>
                <div className="md:flex md:justify-between md:text-left">
                    <div className="text-white opacity-50 mb-[40px]">
                        <p className="font-bold">Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="text-white opacity-50 mb-[40px]">
                        <p className="font-bold">Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-peach text-3xl">
                        <IoLogoFacebook className="cursor-pointer hover:text-lightPeach transition-colors" />
                        <RiYoutubeLine className="cursor-pointer hover:text-lightPeach transition-colors" />
                        <FaTwitter className="cursor-pointer hover:text-lightPeach transition-colors" />
                        <IoLogoPinterest className="cursor-pointer hover:text-lightPeach transition-colors" />
                        <IoLogoInstagram className="cursor-pointer hover:text-lightPeach transition-colors" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};
