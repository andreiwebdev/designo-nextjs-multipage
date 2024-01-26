"use client";

import { motion } from "framer-motion";
import { PortfolioCard } from "../Cards";

export const ServicesSection = () => {
    return (
        <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.5, delay: 0.15 }}
            className="px-[24px] md:px-0 xl:flex xl:gap-[30px] xl:h-full mb-[120px] xl:mb-[160px]"
        >
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
        </motion.div>
    );
};
