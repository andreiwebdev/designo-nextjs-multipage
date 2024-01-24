import Link from "next/link";

export const DesktopMenu = () => {
    return (
        <div className="hidden md:inline-block">
            <ul className="flex items-center list-none text-darkGrey text-[14px] uppercase tracking-[2px] leading-[14px] gap-x-[42px]">
                <li className="md:border border-white md:hover:border-b-darkGrey md:transition-all">
                    <Link href="/our-company">Our Company</Link>
                </li>
                <li className="md:border border-white md:hover:border-b-darkGrey md:transition-all">
                    <Link href="/locations">Locations</Link>
                </li>
                <li className="md:border border-white md:hover:border-b-darkGrey md:transition-all">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};
