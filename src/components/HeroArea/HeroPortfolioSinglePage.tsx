export const HeroPortfolioSinglePage = (props: {
    title: string;
    description: string;
}) => {
    return (
        <div className="px-[24px] bg-peach relative py-[105px] md:py-[64px] md:rounded-[15px] mb-[120px] xl:mb-[160px] overflow-hidden">
            <div>
                <div className="text-white text-center text-[32px] font-medium leading-[36px] mb-[14px] max-w-[327px] mx-auto md:max-w-[573px] md:text-[48px] md:leading-[48px] xl:max-w-[540px] xl:mb-[11px] z-10">
                    {props.title}
                </div>
                <p className="text-white text-center max-w-[327px] mx-auto md:max-w-[445px]">
                    {props.description}
                </p>
                <div
                    className="w-[292px] h-[292px] rounded-full bg-red-500 absolute top-[25px] right-0 opacity-30 md:-top-[140px] md:-right-[140px] xl:right-0"
                    style={{
                        background:
                            "linear-gradient(178deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
                <div
                    className="hidden md:block w-[292px] h-[292px] rounded-full bg-red-500 absolute opacity-30 md:-top-[140px] md:right-[151px] xl:right-[302px]"
                    style={{
                        background:
                            "linear-gradient(290deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
                <div
                    className="hidden md:block w-[292px] h-[292px] rounded-full bg-red-500 absolute opacity-30 md:-top-[140px] md:right-[450px] xl:right-[620px]"
                    style={{
                        background:
                            "linear-gradient(290deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
                <div
                    className="hidden md:block w-[292px] h-[292px] rounded-full bg-red-500 absolute opacity-30 md:-bottom-[180px] md:-right-[140px] xl:right-0"
                    style={{
                        background:
                            "linear-gradient(205deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
                <div
                    className="hidden md:block w-[292px] h-[292px] rounded-full bg-red-500 absolute opacity-30 md:-bottom-[203px] md:right-[151px] xl:right-[302px]"
                    style={{
                        background:
                            "linear-gradient(290deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};
