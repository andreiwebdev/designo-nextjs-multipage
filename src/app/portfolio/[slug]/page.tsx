import { PortfolioCard } from "@/components/Cards";
import { HeroPortfolioSinglePage } from "@/components/HeroArea";

import { promises as fs } from "fs";
import {
    PortfolioCardsSection,
    ServicesCardsSection,
} from "@/components/PortfolioSinglePage";

export default async function PortfolioSinglePage(props: {
    params: { slug: string };
}) {
    const file = await fs.readFile(
        process.cwd() + "/src/app/portfolioSinglePages.json",
        "utf8"
    );

    const parsedData = JSON.parse(file);
    const data = parsedData.filter(
        (item: any) => item.slug === props.params.slug
    );

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
                <PortfolioCardsSection data={data} />
                <ServicesCardsSection data={data} />
            </div>
            <div
                className="hidden xl:block w-[1006px] h-[594px] bg-lightGrey opacity-50 absolute -z-[1] bottom-0 top-[150px] left-0"
                style={{ borderRadius: "297px 297px 297px 0px" }}
            ></div>
        </main>
    );
}
