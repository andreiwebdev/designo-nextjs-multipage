"use client";

import { motion } from "framer-motion";
import { GenericContentComponent } from "../Content/GenericContentComponent";

export const WhyUsSection = () => {
    return (
        <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.5, delay: 0.15 }}
            className="mb-[311px] md:mb-[331px] xl:mb-[380px] xl:grid xl:grid-cols-3 xl:gap-[30px]"
        >
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
            <motion.div
                viewport={{ once: false }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "easeIn", duration: 0.5, delay: 0.75 }}
                className="hidden xl:block w-[1006px] h-[594px] bg-lightGrey -z-[1] opacity-50 absolute right-0"
                style={{
                    borderRadius: "297px 0 297px 297px",
                    transform: "translateY(130px)",
                }}
            ></motion.div>
        </motion.div>
    );
};
