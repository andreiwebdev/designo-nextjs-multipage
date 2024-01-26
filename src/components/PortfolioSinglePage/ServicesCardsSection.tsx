"use client";

import { motion } from "framer-motion";
import { PortfolioCard } from "../Cards";

export const ServicesCardsSection = (props: any) => {
    return (
        <div className="mb-[286px] md:mb-[384px] xl:mb-[380px] xl:grid xl:grid-cols-2 xl:gap-[30px]">
            {props.data[0].projectsCats.map(
                (
                    item: {
                        id: string;
                        title: string;
                        slug: string;
                        imageSrc: string;
                        altText: string;
                    },
                    key: number
                ) => (
                    <motion.div
                        key={item.id}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "easeIn",
                            duration: 0.5,
                            delay: key * 0.15,
                        }}
                    >
                        <PortfolioCard
                            title={item.title}
                            link={item.slug}
                            imageSrc={item.imageSrc}
                            imageAltText={item.altText}
                            extraClasses="xl:h-[308px]"
                        />
                    </motion.div>
                )
            )}
        </div>
    );
};
