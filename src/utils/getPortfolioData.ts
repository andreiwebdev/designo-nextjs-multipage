export const getPortfolioData = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}`, {
            method: "GET",
            headers: {
                "X-Master-Key":
                    `$2a$10$kiYsk12k4TbbKUp2qiyTd.${process.env.API_KEY}` || "",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Process the data as needed
        return data.record;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
