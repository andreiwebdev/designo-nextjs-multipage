import Image from "next/image";

export const BackgroundImage = (props: {
    imageSrc: string;
    altText: string;
    extraClasses?: string;
}) => {
    return (
        <Image
            alt={props.altText}
            src={props.imageSrc}
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: "cover",
            }}
            className={props.extraClasses}
            priority
        />
    );
};
