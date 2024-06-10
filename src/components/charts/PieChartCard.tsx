import PieChart from "./PieChart.tsx";
import React from "react";

// Defining the type for product data associated to each product
type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string
};

// Defining the type for the props expected by the PieChart component
type PieChartProps = {
    data: ProductData[]
};

// Creating a PieChartCard as a functional component
const PieChartCard : React.FC<PieChartProps> = ({ data }) => {
    return (
        <section className="lg:w-1/3 mb-4 ">
            <div className="flex flex-col rounded-[5px] bg-[#F5F5F5] h-[24rem]">
                <span className="max-sm:text-base text-lg font-semibold text-[#260065] py-4 px-2">Products orders</span>
                <div className="max-lg:py-6 lg:mt-4 grid place-items-center px-0">

                    {/* Rendering the PieChart component with the provided data prop */}
                    <PieChart data={data}/>

                </div>
            </div>
        </section>
    );
}

export default PieChartCard;