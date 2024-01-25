import { PortfolioCard } from "@/components/Cards";
import { GenericContentComponent } from "@/components/Content/GenericContentComponent";
import { HeroAreaHome } from "@/components/HeroArea";

export default function Home() {
    return (
        <main>
            <HeroAreaHome />
            <div className="px-[24px] md:px-0 xl:flex xl:gap-[30px] xl:h-full mb-[120px] xl:mb-[160px]">
                <PortfolioCard
                    title="Web Design"
                    link="/portfolio/web-design"
                    imageSrc="/assets/home/desktop/image-web-design-small.jpg"
                    extraClasses="xl:max-w-[50%] xl:mb-0 xl:flex-grow xl:h-[541px]"
                />
                <div className="xl:w-full xl:flex xl:flex-col">
                    <PortfolioCard
                        title="App Design"
                        link="/portfolio/app-design"
                        imageSrc="/assets/home/desktop/image-app-design.jpg"
                        extraClasses="xl:flex-grow"
                    />
                    <PortfolioCard
                        title="Graphic Design"
                        link="/portfolio/graphic-design"
                        imageSrc="/assets/home/desktop/image-graphic-design.jpg"
                        extraClasses="xl:flex-grow"
                    />
                </div>
            </div>
            <div className="mb-[311px] md:mb-[331px] xl:mb-[380px] xl:grid xl:grid-cols-3 xl:gap-[30px] xl:relative">
                <GenericContentComponent
                    imageUrl="/assets/home/desktop/illustration-passionate.svg"
                    imageAltText="illustration-passionate"
                    imageBgDirection="right"
                    title="Passionate"
                    text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
                />
                <GenericContentComponent
                    imageUrl="/assets/home/desktop/illustration-resourceful.svg"
                    imageAltText="illustration-resourceful"
                    imageBgDirection="bottom"
                    title="RESOURCEFUL"
                    text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
                />
                <GenericContentComponent
                    imageUrl="/assets/home/desktop/illustration-friendly.svg"
                    imageAltText="illustration-friendly"
                    imageBgDirection="top"
                    title="FRIENDLY"
                    text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
                />
                <div
                    className="hiddex xl:block w-[1006px] h-[594px] bg-lightGrey opacity-50 absolute -z-[1] bottom-0 top-[150px] -right-[246px]"
                    style={{ borderRadius: "297px 0 297px 297px" }}
                ></div>
            </div>
        </main>
    );
}
