import { ContactCard } from "@/components/Cards";
import { GenericContentComponent } from "@/components/Content/GenericContentComponent";

export default function Contact() {
    return (
        <main>
            <ContactCard />
            <div className="mb-[120px] xl:mb-[160px] xl:grid xl:grid-cols-3 xl:gap-[30px]">
                <GenericContentComponent
                    imageUrl="/assets/shared/desktop/illustration-canada.svg"
                    imageAltText="illustration-passionate"
                    imageBgDirection="right"
                    title="Canada"
                    buttonText="See Location"
                    buttonLink="/locations"
                    buttonExtraClasses="mx-auto md:ml-0 md:mr-auto xl:mx-auto"
                />
                <GenericContentComponent
                    imageUrl="/assets/shared/desktop/illustration-australia.svg"
                    imageAltText="illustration-resourceful"
                    imageBgDirection="bottom"
                    title="Australia"
                    buttonText="See Location"
                    buttonLink="/locations"
                    buttonExtraClasses="mx-auto md:ml-0 md:mr-auto xl:mx-auto"
                />
                <GenericContentComponent
                    imageUrl="/assets/shared/desktop/illustration-united-kingdom.svg"
                    imageAltText="illustration-friendly"
                    imageBgDirection="top"
                    title="United Kingdom"
                    buttonText="See Location"
                    buttonLink="/locations"
                    buttonExtraClasses="mx-auto md:ml-0 md:mr-auto xl:mx-auto"
                />
                <div
                    className="hidden xl:block w-[1006px] h-[594px] bg-lightGrey -z-[1] opacity-50 absolute right-0"
                    style={{
                        borderRadius: "297px 0 297px 297px",
                        transform: "translateY(130px)",
                    }}
                ></div>
            </div>
        </main>
    );
}
