import Link from "next/link";

export const MobileMenu = (props: { toggleMenu: boolean }) => {
    return (
        <>
            {props.toggleMenu && (
                <div className="bg-[rgba(0,0,0,0.5)] w-full h-screen md:hidden absolute top-full left-0 z-[10000]">
                    <div className="bg-black py-[48px] px-[24px]">
                        <ul className="list-none text-white text-[24px] uppercase tracking-[2px] leading-[25px]">
                            <li className="mb-[32px]">
                                <Link href="/our-company">Our Company</Link>
                            </li>
                            <li className="mb-[32px]">
                                <Link href="/locations">Locations</Link>
                            </li>
                            <li className="mb-[32px]">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
