import Image from "next/image";
import { BackgroundImage, Button } from "../common";

export const HeroAreaHome = () => {
    return (
        <div className="px-[24px] bg-peach pt-[80px] h-[80vh] relative overflow-hidden mb-[120px] md:rounded-[15px] md:pt-[60px] md:px-[58px] xl:mb-[160px] xl:h-auto xl:min-h-[45vh] xl:px-[95px] xl:flex xl:flex-col xl:justify-center">
            <BackgroundImage
                imageSrc="/assets/home/desktop/bg-pattern-hero-home.svg"
                altText="bg pattern hero home"
                extraClasses="!object-contain !left-[18%]"
            />
            <div className="z-[2] relative">
                <div className="text-white text-center text-[32px] font-medium leading-[36px] mb-[14px] max-w-[327px] mx-auto md:max-w-[573px] md:text-[48px] md:leading-[48px] xl:text-left xl:ml-0 xl:mr-0 xl:max-w-[540px] xl:mb-[11px]">
                    Award-winning custom designs and digital branding solutions
                </div>
                <p className="text-white text-center mb-[24px] max-w-[327px] mx-auto md:max-w-[445px] xl:text-left xl:ml-0 xl:mr-0 xl:mb-[40px]">
                    With over 10 years in the industry, we are experienced in
                    creating fully responsive websites, app design, and engaging
                    brand experiences. Find out more about our services.
                </p>
                <Button
                    style="light"
                    buttonText="Learn More"
                    extraClasses="mx-auto mb-[80px] xl:mx-0"
                />
            </div>
            <div className="absolute top-[30%] left-0 h-full w-full  xl:h-[500px] xl:max-w-[60%] xl:w-screen xl:-right-[80px] xl:left-auto xl:-top-[80px]">
                <div className="relative w-full h-screen">
                    <Image
                        src="/assets/home/desktop/image-hero-phone.png"
                        alt="hero phone"
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain absolute z-[1] xl:object-top xl:!top-[0px]"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
