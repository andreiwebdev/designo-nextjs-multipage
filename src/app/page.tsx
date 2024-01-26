import { HeroAreaHome } from "@/components/HeroArea";
import { ServicesSection, WhyUsSection } from "@/components/Home";

export default function Home() {
    return (
        <main>
            <HeroAreaHome />
            <ServicesSection />
            <WhyUsSection />
        </main>
    );
}
