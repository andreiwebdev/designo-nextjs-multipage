type Props = {
    style: string;
};

export const Button = (props: Props) => {
    let styleClasses;
    if (props.style === "light") {
        styleClasses =
            "bg-white text-darkGrey hover:bg-lightPeach hover:text-white";
    } else {
        styleClasses =
            "bg-peach text-white hover:bg-lightPeach hover:text-white";
    }

    return (
        <div
            className={`pt-[18px] pb-[16px] ps-[24px] pe-[25px] text-[15px] font-medium line tracking-[1px] uppercase rounded-[8px] w-fit cursor-pointer transition-colors ${styleClasses}`}
        >
            Learn More
        </div>
    );
};
