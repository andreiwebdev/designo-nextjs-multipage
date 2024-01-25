import { BackgroundImage } from "../common";

export const HeroOurCompany = () => {
    return (
        <div className="text-center text-white bg-peach md:rounded-[15px] overflow-hidden xl:flex xl:items-center md:mb-[120px] xl:mb-[160px]">
            <div className="relative w-full h-[320px] xl:h-[480px] xl:w-[40%] xl:order-2">
                <BackgroundImage
                    imageSrc="/assets/about/desktop/image-about-hero.jpg"
                    altText="About Hero Image"
                    extraClasses="md:rounded-[15px] z-10 xl:rounded-none xl:rounded-r-[15px]"
                />
            </div>
            <div className="py-[80px] px-[24px] relative xl:w-[60%] xl:order-1 xl:text-left xl:px-[95px]">
                <div className="text-[32px] font-medium leading-[36px] mb-[24px] z-10 relative md:text-[48px] md:leading-[48px] md:mb-[32px]">
                    About Us
                </div>
                <p className="text-[15px] z-10 relative">
                    Founded in 2010, we are a creative agency that produces
                    lasting results for our clients. We’ve partnered with many
                    startups, corporations, and nonprofits alike to craft
                    designs that make real impact. We’re always looking forward
                    to creating brands, products, and digital experiences that
                    connect with our clients’ audiences.
                </p>
                <div
                    className="w-[292px] h-[292px] rounded-full absolute opacity-30 -top-[30%] right-0 md:w-[640px] md:h-[640px] md:-top-[440px] md:right-[30%] xl:-top-[200px] xl:right-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};
