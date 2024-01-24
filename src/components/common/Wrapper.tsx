export const Wrapper = (props: {
    children: React.ReactNode;
    extraClasses?: string;
}) => {
    return (
        <div
            className={`container mx-auto px-0 xl:px-0 xs:px-0 sm:max-w-3xl md:px-[39px] xl:max-w-7xl ${
                props.extraClasses ?? ""
            }`}
        >
            {props.children}
        </div>
    );
};
