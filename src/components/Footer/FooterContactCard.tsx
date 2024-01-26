"use client";

import { usePathname } from "next/navigation";
import { Button } from "../common";
import Link from "next/link";

export const FooterContactCard = () => {
    const pathname = usePathname();

    if (pathname !== "/contact")
        return (
            <div className="w-full bg-peach text-center rounded-[15px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%] xl:text-left xl:overflow-hidden">
                <div className="px-6 py-16 xl:px-[92px] xl:py-[72px] xl:flex xl:items-center xl:justify-between xl:relative">
                    <div>
                        <div className="text-white text-3xl mb-2 max-w-[279px] mx-auto font-medium xl:text-4xl xl:mx-0">
                            Let’s talk about your project
                        </div>
                        <p className="text-white text-sm mb-[32px] max-w-[279px] mx-auto xl:max-w-[459px] xl:mx-0">
                            Ready to take it to the next level? Contact us today
                            and find out how our expertise can help your
                            business grow.
                        </p>
                    </div>
                    <Link href="/contact">
                        <Button
                            buttonText="GET IN TOUCH"
                            style="light"
                            extraClasses="mx-auto xl:ml-auto xl:mr-0"
                        />
                    </Link>
                    <div
                        className="hidden xl:block w-[292px] h-[292px] rounded-full -z-[1] absolute bottom-[50%] right-0 opacity-30"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                        }}
                    ></div>
                    <div
                        className="hidden xl:block w-[292px] h-[292px] rounded-full -z-[1] absolute bottom-[50%] right-[292px] opacity-30"
                        style={{
                            background:
                                "linear-gradient(34deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                        }}
                    ></div>
                    <div
                        className="hidden xl:block w-[292px] h-[292px] rounded-full -z-[1] absolute top-[50%] right-0 opacity-30"
                        style={{
                            background:
                                "linear-gradient(358deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                        }}
                    ></div>
                    <div
                        className="hidden xl:block w-[292px] h-[292px] rounded-full -z-[1] absolute top-[50%] right-[292px] opacity-30"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                        }}
                    ></div>
                    <div
                        className="hidden xl:block w-[292px] h-[292px] rounded-full -z-[1] absolute top-[50%] right-[584px] opacity-30"
                        style={{
                            background:
                                "linear-gradient(190deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                        }}
                    ></div>
                </div>
            </div>
        );
};
