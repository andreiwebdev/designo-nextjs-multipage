"use client";

import Link from "next/link";
import { BackgroundImage } from "../common";
import { motion } from "framer-motion";

export const PortfolioCardsSection = (props: any) => {
    return (
        <div className="sm:block xl:grid xl:grid-cols-3 xl:gap-[30px] mb-[96px] md:mb-[120px] xl:mb-[160px]">
            {props.data[0].projects.map(
                (
                    item: {
                        id: string;
                        imageSrc: string;
                        altText: string;
                        title: string;
                        description: string;
                    },
                    key: number
                ) => (
                    <motion.div
                        viewport={{ once: false }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "easeIn",
                            duration: 0.5,
                            delay: key * 0.15,
                        }}
                    >
                        <Link
                            key={item.id}
                            href="/"
                            className="group hover:bg-peach transition-colors bg-[#FDF3F0] rounded-[15px] mb-[40px] block sm:flex sm:items-center sm:mb-[30px] xl:block xl:mb-0"
                        >
                            <div className="relative w-full h-[320px] rounded-t-[15px] sm:w-[50%] xl:w-full">
                                <BackgroundImage
                                    imageSrc={item.imageSrc}
                                    altText={item.altText}
                                    extraClasses="rounded-t-[15px] sm:rounded-tr-[0px] sm:rounded-bl-[15px] sm:rounded-tl-[15px] xl:rounded-b-[0px] xl:rounded-t-[15px]"
                                />
                            </div>
                            <div className="bg-[#FDF3F0] text-center rounded-b-[15px] py-[20px] px-[15px] sm:w-[50%] xl:w-full group-hover:bg-peach transition-colors group-hover:text-white">
                                <div className="group-hover:text-white text-peach transition-colors text-[20px] font-medium leading-[26px] tracking-[5px] uppercase mb-3">
                                    {item.title}
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    </motion.div>
                )
            )}
        </div>
    );
};
