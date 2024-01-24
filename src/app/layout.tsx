import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Wrapper } from "@/components/common";
import { Header } from "@/components/Header";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Designo | Multi Page Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
            <body className={jost.className}>
                <Header />
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
