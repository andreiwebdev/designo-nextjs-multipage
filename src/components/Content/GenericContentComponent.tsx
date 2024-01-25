import Image from "next/image";
import { Button } from "../common";
import Link from "next/link";

export const GenericContentComponent = (props: {
    imageUrl: string;
    imageAltText: string;
    imageBgDirection: string;
    title: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
    buttonExtraClasses?: string;
}) => {
    return (
        <div className="text-center mb-[80px] last:mb-0 md:text-left md:grid md:grid-cols-2 md:items-center xl:grid-cols-1 xl:text-center xl:flex xl:flex-col">
            <div className="relative md:w-fit xl:w-full">
                <Image
                    src={props.imageUrl}
                    width={202}
                    height={202}
                    alt={props.imageAltText}
                    className="mb-[48px] mx-auto md:mb-0 xl:mb-[48px]"
                />
                <div
                    className="rounded-[100%] w-[202px] h-[202px] -z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[180px] md:h-[180px]"
                    style={{
                        background: `linear-gradient(to ${props.imageBgDirection}, rgba(255, 255, 255, 0.1), rgba(186, 162, 157, 0.5))`,
                    }}
                ></div>
            </div>
            <div>
                <div className="text-darkGrey text-[20px] font-medium leading-[26px] tracking-[5px] uppercase mb-[32px] md:w-full">
                    {props.title}
                </div>
                {props.text && (
                    <p className="text-darkGrey w-[327px] mx-auto md:w-full">
                        {props.text}
                    </p>
                )}
                {props.buttonText && props.buttonLink && (
                    <Link href={props.buttonLink}>
                        <Button
                            buttonText={props.buttonText}
                            style="dark"
                            extraClasses={props.buttonExtraClasses}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};
