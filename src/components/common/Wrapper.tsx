export const Wrapper = (props: {
    children: React.ReactNode;
    extraClasses?: string;
}) => {
    return (
        <div
            className={`mx-auto px-0 xl:px-0 xs:px-0 md:max-w-[688px] xl:max-w-[1112px] ${
                props.extraClasses ?? ""
            }`}
        >
            {props.children}
        </div>
    );
};
