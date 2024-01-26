import { InfoCardMap } from "@/components/Cards";

export default function Locations() {
    return (
        <main className="mb-[320px] md:mb-[384px]">
            <InfoCardMap
                imageSrc="/assets/locations/desktop/image-map-canada.png"
                altText="Map"
                leftDescription={[
                    "Designo Central Office",
                    "3886 Wellington Street",
                    "Toronto, Ontario M9C 3J5",
                ]}
                rightDescription={[
                    "Contact",
                    "P : +1 253-863-8967",
                    "M : contact@designo.co",
                ]}
                mapPosition="right"
                title="Canada"
                mapCoords={[43.64428287311506, -79.39457671728307]}
                mapZoom={12}
            />
            <InfoCardMap
                imageSrc="/assets/locations/desktop/image-map-australia.png"
                altText="Map"
                leftDescription={[
                    "Designo AU Office",
                    "19 Balonne Street",
                    "New South Wales 2443",
                ]}
                rightDescription={[
                    "Contact",
                    "P : (02) 6720 9092",
                    "M : contact@designo.au",
                ]}
                mapPosition="left"
                title="Australia"
                mapCoords={[-30.316838637388674, 149.76919547479105]}
                mapZoom={11}
            />
            <InfoCardMap
                imageSrc="/assets/locations/desktop/image-map-united-kingdom.png"
                altText="Map"
                leftDescription={[
                    "Designo UK Office",
                    "13  Colorado Way",
                    "Rhyd-y-fro SA8 9GA",
                ]}
                rightDescription={[
                    "Contact",
                    "P : 078 3115 1400",
                    "M : contact@designo.uk",
                ]}
                mapPosition="right"
                title="United Kingdom"
                mapCoords={[51.732124162575055, -3.8619213488807547]}
                mapZoom={10}
            />
        </main>
    );
}
