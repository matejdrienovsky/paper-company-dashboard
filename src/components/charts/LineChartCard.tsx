import LineChart from "./LineChart.tsx";
import React from "react";

// Defining the type for product data associated to each product
type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string
};

// Defining the type for the props expected by the LineChart component
type LineChartProps = {
    data: ProductData[]
};

// // Creating a LineChartCard as a functional component
const LineChartCard : React.FC<LineChartProps> = ({ data }) => {
    return (
        <section className="lg:w-2/3">
            <div className="flex flex-col rounded-[5px] bg-[#F5F5F5] h-[24rem]">
                <span className="max-sm:text-base text-lg font-semibold text-[#260065] py-4 px-2">Orders</span>
                <div className="lg:pt-4 px-2">
                    {/* Rendering the LineChart component with the provided data prop */}
                    <LineChart data={data}/>
                </div>
            </div>
        </section>
    );
}

export default LineChartCard;