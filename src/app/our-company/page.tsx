import { HeroOurCompany } from "@/components/HeroArea";
import {
    CardDescriptionImage,
    LocationsSection,
} from "@/components/OurCompany";

export default function OurCompany() {
    return (
        <main>
            <HeroOurCompany />
            <CardDescriptionImage
                title="World-class talent"
                firstParagraph="We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from
                concept to launch, ensuring success in its given market.
                We are constantly updating our skills in a myriad of
                platforms."
                secondParagraph="Our team is multi-disciplinary and we are not merely
                interested in form — content and meaning are just as
                important. We give great importance to craftsmanship,
                service, and prompt delivery. Clients have always been
                impressed with our high-quality outcomes that
                encapsulates their brand’s story and mission."
                imageSrc="/assets/about/desktop/image-world-class-talent.jpg"
                altText="World-class talent"
                imagePosition="left"
            />
            <LocationsSection />
            <CardDescriptionImage
                title="The real deal"
                firstParagraph="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
                secondParagraph="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
                imageSrc="/assets/about/desktop/image-real-deal.jpg"
                altText="The real deal"
                imagePosition="right"
                containerExtraClasses="!mb-[310px] md:!mb-[384px]"
            />
            <div
                className="hidden xl:block w-[1006px] h-[594px] bg-lightGrey opacity-50 absolute -z-[1] bottom-0 top-[450px] left-0"
                style={{ borderRadius: "297px 297px 297px 0px" }}
            ></div>
        </main>
    );
}
