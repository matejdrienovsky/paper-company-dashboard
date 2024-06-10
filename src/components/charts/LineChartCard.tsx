import LineChart from "./LineChart.tsx";
import React from "react";
type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string
};

type LineChartProps = {
    data: ProductData[]
};
const PieChartCard : React.FC<LineChartProps> = ({ data }) => {
    return (
        <article className="lg:w-2/3">
            <div className="flex flex-col rounded-[5px] bg-[#F5F5F5] h-[24rem]">
                <span className="max-sm:text-base text-lg font-semibold text-[#260065] py-4 px-2">Orders</span>
                <div className="lg:pt-4 px-2">
                    <LineChart data={data}/>
                </div>
            </div>
        </article>
    );
}

export default PieChartCard;