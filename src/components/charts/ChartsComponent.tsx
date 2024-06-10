import React from 'react';
import PieChartCard from "./PieChartCard.tsx";
import LineChartCard from "./LineChartCard.tsx";

// Defining the type for the data
type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string
};

// Defining the type for the props
type ChartsProps = {
    data: ProductData[]
};

// Component to display the charts in the dashboard
const ChartsComponent : React.FC<ChartsProps> = ({ data }) => {
    return (
        <section className="flex max-lg:flex-col lg:flex-row lg:justify-between border-b-2 border-[#260065]/50 gap-x-4 mx-2 xl:mx-10 mt-4">
            {/* Display the pie chart */}
            <PieChartCard data={data}/>

            {/* Display the line chart */}
            <LineChartCard data={data}/>
        </section>
    )
}

export default ChartsComponent;