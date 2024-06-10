import React from 'react';
import PieChartCard from "./PieChartCard.tsx";
import LineChartCard from "./LineChartCard.tsx";

type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string
};

type ChartsProps = {
    data: ProductData[]
};

const ChartsComponent : React.FC<ChartsProps> = ({ data }) => {
    return (
        <section className="flex max-lg:flex-col lg:flex-row lg:justify-between border-b-2 border-[#260065]/50 gap-x-4 mx-2 xl:mx-10 mt-4">
            <PieChartCard data={data}/>
            <LineChartCard data={data}/>
        </section>
    )
}

export default ChartsComponent;