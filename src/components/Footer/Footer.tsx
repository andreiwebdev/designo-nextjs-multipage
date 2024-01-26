import Image from "next/image";
import { Wrapper } from "../common";
import Link from "next/link";
import {
    IoLogoFacebook,
    IoLogoPinterest,
    IoLogoInstagram,
} from "react-icons/io";
import { RiYoutubeLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FooterContactCard } from ".";

export const Footer = () => {
    return (
        <div className="w-full bg-black">
            <Wrapper extraClasses="text-center px-[24px] xl:px-[0px] pt-[253px] pb-[64px] relative">
                <FooterContactCard />
                <div className="md:flex md:items-center md:justify-between md:mb-10">
                    <Link href="/">
                        <Image
                            src="/assets/shared/desktop/logo-light.png"
                            alt="designo logo light"
                            className="mx-auto mb-[32px] md:m-0"
                            width={202}
                            height={27}
                        />
                    </Link>
                    <div className="w-full h-[1px] bg-white opacity-[0.1] mb-8 md:hidden"></div>
                    <ul className="list-none text-white text-[14px] uppercase tracking-[2px] leading-[14px] mb-[40px] md:flex md:mb-0 md:gap-11">
                        <li className="mb-[32px] md:mb-0 border border-black md:hover:border-b-white">
                            <Link href="/our-company">Our Company</Link>
                        </li>
                        <li className="mb-[32px] md:mb-0 border border-black md:hover:border-b-white">
                            <Link href="/locations">Locations</Link>
                        </li>
                        <li className="mb-[32px] md:mb-0 border border-black md:hover:border-b-white">
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
