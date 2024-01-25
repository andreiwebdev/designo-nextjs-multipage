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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
                objectFit: "cover",
            }}
            className={props.extraClasses}
            placeholder="blur"
            blurDataURL={props.imageSrc}
        />
    );
};
