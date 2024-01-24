import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const MobileMenuToggler = (props: {
    toggleMenu: boolean;
    handleToggleMenu: () => void;
}) => {
    return (
        <>
            {!props.toggleMenu && (
                <GiHamburgerMenu
                    onClick={props.handleToggleMenu}
                    className="cursor-pointer text-[24px] text-black md:hidden"
                />
            )}
            {props.toggleMenu && (
                <IoClose
                    onClick={props.handleToggleMenu}
                    className="cursor-pointer text-[24px] text-blac md:hidden"
                />
            )}
        </>
    );
};
