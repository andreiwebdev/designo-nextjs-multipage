import { promises as fs } from "fs";

export const getPortfolioData = async () => {
    const file = await fs.readFile(
        process.cwd() + "/src/app/portfolioSinglePages.json",
        "utf8"
    );

    return JSON.parse(file);
};
