import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { BackgroundImage } from "../common";

export const PortfolioCard = (props: {
    title: string;
    link: string;
    imageSrc: string;
    extraClasses?: string;
}) => {
    return (
        <Link
            href={props.link}
            className={`group w-full h-[250px] rounded-[15px] flex flex-col items-center justify-center gap-[12px] relative z-[2] mb-[24px] last:mb-0 md:h-[200px] md:gap-[20px] ${props.extraClasses}`}
        >
            <div className="text-white text-[28px] font-medium tracking-[1.4px] leading-[36px] uppercase z-[2] md:text-[40px] md:leading-[48px] md:tracking-[2px]">
                {props.title}
            </div>
            <div className="flex items-center gap-[16px] uppercase text-white text-[15px] font-medium tracking-[5px] z-[2]">
                VIEW PROJECTS
                <FaAngleRight className="text-peach" />
            </div>
            <BackgroundImage
                imageSrc={props.imageSrc}
                altText="image-web-design-small"
                extraClasses="!z-1 rounded-[15px]"
            />
            <div className="bg-[rgba(0,0,0,0.5)] absolute w-full h-full top-0 left-0 rounded-[15px] group-hover:bg-peach group-hover:opacity-[0.8]  transition-colors"></div>
        </Link>
    );
};
