import React from "react";

// Define the props for the InformationList component
interface InformationListProps {
    totalSold: number,
    mostPopular: string,
    totalRevenue: number
    leastPopular: string
    bestMonth: string
    worstMonth: string
}

// Define the props for the InfoItem component
interface InfoItemProps {
    title: string,
    count: string,
    isAlternate?: boolean
}

// Create a Function Component InfoItem with properties unpacked from InfoItemProps
const InfoItem: React.FC<InfoItemProps>  = ({ title, count, isAlternate }) => {
    return (
        // Div containing title and count, background color is toggled by isAlternate prop
        <div className={`flex flex-row justify-between ${isAlternate ? "bg-[#F5F5F5]" : ""} mx-2 xl:mx-10 py-3`}>
            <div className="flex flex-col pl-4">
                <h3 className="max-sm:text-base text-lg font-semibold">{title}</h3>
            </div>
            <div className="flex items-center">
                <a href="#" className=" max-sm:text-base text-lg font-bold mr-4"><u>{title === "Total Revenue" ? `€${count}` : count}</u></a>
            </div>
        </div>
    );
}

// Create a Function Component InformationList with properties unpacked from InformationListProps
const InformationList: React.FC<InformationListProps> = ({ totalSold, mostPopular, totalRevenue ,leastPopular,bestMonth, worstMonth}) => {
    return (
        // Div containing InfoItem components with different titles and counts
        <div>
            <InfoItem title="Total Sold" count={totalSold.toString()} isAlternate />
            <InfoItem title="Total Revenue" count={totalRevenue.toString()}/>
            <InfoItem title="Most Popular" count={mostPopular} isAlternate/>
            <InfoItem title={"Least Popular"} count={leastPopular} />
            <InfoItem title={"Best Month"} count={bestMonth} isAlternate/>
            <InfoItem title={"Worst Month"} count={worstMonth} />
        </div>
    );
}

export default InformationList;