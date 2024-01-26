"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export const InfoCardMap = (props: {
    imageSrc: string;
    altText: string;
    title: string;
    leftDescription: string[];
    rightDescription: string[];
    mapPosition: "left" | "right";
    mapCoords: [number, number];
    mapZoom: number;
}) => {
    return (
        <div className="xl:flex xl:items-center xl:gap-[30px] mb-[60px] md:mb-[120px] xl:mb-[30px]">
            <div
                className={`w-full h-[320px] md:h-[326px] md:mb-[31px] relative xl:mb-0 xl:w-[30%] xl:h-[326px] ${
                    props.mapPosition === "right" ? "xl:order-2" : "xl:order-1"
                }`}
            >
                <MapContainer
                    center={props.mapCoords}
                    zoom={props.mapZoom}
                    scrollWheelZoom={true}
                    className="w-full h-full md:rounded-[15px]"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            </div>
            <div
                className={`relative bg-lightPink py-[80px] px-[24px] text-center mb-[30px] md:rounded-[15px] md:text-left md:px-[75px] xl:mb-0 xl:w-[70%] xl:h-[326px] overflow-hidden ${
                    props.mapPosition === "right" ? "xl:order-1" : "xl:order-2"
                }`}
            >
                <div className="md:flex md:flex-col">
                    <div className="text-peach text-[32px] font-medium leading-[36px] mb-[24px] md:text-[40px] md:leading-[48px]">
                        {props.title}
                    </div>
                    <div className="md:flex md:gap-[120px]">
                        <div className="mb-[24px] z-10 relative">
                            {props.leftDescription.map((item, index) => {
                                if (index === 0) {
                                    return (
                                        <div
                                            key={index}
                                            className="text-darkGray text-[15px] md:text-[16px] leading-[25px] font-medium"
                                        >
                                            {item}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={index}
                                            className="text-darkGray text-[15px] md:text-[16px] leading-[25px]"
                                        >
                                            {item}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div>
                            {props.rightDescription.map((item, index) => {
                                if (index === 0) {
                                    return (
                                        <div
                                            key={index}
                                            className="text-darkGray text-[15px] md:text-[16px] leading-[25px] font-medium"
                                        >
                                            {item}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={index}
                                            className="text-darkGray text-[15px] md:text-[16px] leading-[25px]"
                                        >
                                            {item}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className="w-[292px] h-[292px] rounded-full absolute top-0 left-0 opacity-[0.06] z-[1] md:bottom-0 md:top-auto"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
                <div
                    className="w-[292px] h-[292px] rounded-full absolute -bottom-[30%] -right-[30%] opacity-[0.06] z-[1] md:bottom-0 md:right-auto md:left-[292px]"
                    style={{
                        background:
                            "linear-gradient(264deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};
