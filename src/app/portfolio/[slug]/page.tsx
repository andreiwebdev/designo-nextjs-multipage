import { PortfolioCard } from "@/components/Cards";
import { HeroPortfolioSinglePage } from "@/components/HeroArea";
import { BackgroundImage } from "@/components/common";
import Link from "next/link";

import { promises as fs } from "fs";

export default async function PortfolioSinglePage(props: any) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/portfolioSinglePages.json",
        "utf8"
    );

    const parsedData = JSON.parse(file);
    const data = parsedData.filter(
        (item: any) => item.slug === props.params.slug
    );

    console.log(data);

    if (data.length < 1)
        return (
            <div className="ml-[100px] mx-0 mb-[400px] text-center">
                <h1>404 Page not found</h1>
            </div>
        );

    return (
        <main>
            <HeroPortfolioSinglePage
                title={data[0].title}
                description={data[0].description}
            />
            <div className="px-[24px] md:px-0">
                {/* cards */}
                <div className="sm:block xl:grid xl:grid-cols-3 xl:gap-[30px] mb-[96px] md:mb-[120px] xl:mb-[160px]">
                    {data[0].projects.map(
                        (item: {
                            id: string;
                            imageSrc: string;
                            altText: string;
                            title: string;
                            description: string;
                        }) => (
                            <Link
                                key={item.id}
                                href="/"
                                className="group hover:bg-peach bg-[#FDF3F0] rounded-[15px] mb-[40px] last:mb-0 block sm:flex sm:items-center sm:mb-[30px] xl:block xl:mb-0"
                            >
                                <div className="relative w-full h-[320px] rounded-t-[15px] sm:w-[50%] xl:w-full">
                                    <BackgroundImage
                                        imageSrc={item.imageSrc}
                                        altText={item.altText}
                                        extraClasses="rounded-t-[15px] sm:rounded-tr-[0px] sm:rounded-bl-[15px] sm:rounded-tl-[15px] xl:rounded-b-[0px] xl:rounded-t-[15px]"
                                    />
                                </div>
                                <div className="bg-[#FDF3F0] text-center rounded-b-[15px] py-[20px] px-[15px] sm:w-[50%] xl:w-full group-hover:bg-peach group-hover:text-white">
                                    <div className="group-hover:text-white text-peach text-[20px] font-medium leading-[26px] tracking-[5px] uppercase mb-3">
                                        {item.title}
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        )
                    )}
                </div>
                {/* services cards */}
                <div className="mb-[286px] md:mb-[384px] xl:mb-[380px] xl:grid xl:grid-cols-2 xl:gap-[30px]">
                    {data[0].projectsCats.map(
                        (item: {
                            id: string;
                            title: string;
                            slug: string;
                            imageSrc: string;
                            altText: string;
                        }) => (
                            <PortfolioCard
                                title={item.title}
                                link={item.slug}
                                imageSrc={item.imageSrc}
                                imageAltText={item.altText}
                                extraClasses="xl:h-[308px]"
                            />
                        )
                    )}
                </div>
            </div>
            <div
                className="hiddex xl:block w-[1006px] h-[594px] bg-lightGrey opacity-50 absolute -z-[1] bottom-0 top-[150px] left-0"
                style={{ borderRadius: "297px 297px 297px 0px" }}
            ></div>
        </main>
    );
}
