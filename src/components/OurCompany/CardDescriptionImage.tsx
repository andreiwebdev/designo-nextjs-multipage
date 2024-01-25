import { BackgroundImage } from "../common";

export const CardDescriptionImage = (props: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    imageSrc: string;
    altText: string;
    imagePosition: string;
    containerExtraClasses?: string;
}) => {
    return (
        <div
            className={`xl:flex xl:items-center mb-[120px] xl:mb-[160px] ${props.containerExtraClasses}`}
        >
            <div
                className={`relative h-[562px] w-full rounded-t-[15px] md:h-[320px] xl:h-[640px] xl:w-[40%] ${
                    props.imagePosition == "right" ? "xl:order-2" : "xl:order-1"
                }`}
            >
                <BackgroundImage
                    imageSrc={props.imageSrc}
                    altText={props.altText}
                    extraClasses={`object-bottom md:rounded-t-[15px] md:object-center xl:rounded-tr-[0px] xl:rounded-l-[15px] ${
                        props.imagePosition == "right"
                            ? "xl:rounded-l-none xl:rounded-tr-[15px] xl:rounded-br-[15px]"
                            : ""
                    }`}
                />
            </div>
            <div
                className={`py-[80px] px-[24px] text-center bg-[#FDF3F0] rounded-b-[15px] md:py-[68px] md:px-[59px] xl:h-[640px] xl:w-[60%] xl:text-left xl:flex xl:flex-col xl:justify-center xl:rounded-r-[15px] xl:rounded-l-[0px] relative overflow-hidden ${
                    props.imagePosition == "right"
                        ? "xl:order-1 xl:!rounded-l-[15px] xl:!rounded-r-none"
                        : "xl:order-2"
                }`}
            >
                <div className="text-peach text-[32px] font-medium leading-[36px] mb-[24px] md:text-[40px] md:leading-[48px] z-10 relative">
                    {props.title}
                </div>
                <div className="relative z-10">
                    <p className="mb-[32px]">{props.firstParagraph}</p>
                    <p>{props.secondParagraph}</p>
                </div>
                <div
                    className="hidden xl:block w-[292px] h-[292px] rounded-full absolute right-0 opacity-[0.06] left-0 bottom-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
                <div
                    className="hidden xl:block w-[292px] h-[292px] rounded-full absolute right-0 opacity-[0.06] left-[292px] bottom-0 rotate-[259deg]"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};
