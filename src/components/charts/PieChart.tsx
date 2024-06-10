import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

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

// Function that calculates and returns the total quantity sold for each product
const getProductCount = (data: ProductData[]): { [key: string]: number } => {
    const productCount: { [key: string]: number } = {};

    data.forEach(product => {
        if (product.name in productCount) {
            productCount[product.name] += product.quantity_sold;
        } else {
            productCount[product.name] = product.quantity_sold;
        }
    });

    return productCount;
};

// Defines the PieChart component
const PieChart: React.FC<PieChartProps> = ({ data }) => {

    // Call the getProductCount function to get the total quantity sold for each product
    const productCount = getProductCount(data);

    // Define the options for the pie chart using ApexCharts
    const options: ApexOptions = {
        labels: Object.keys(productCount),
        chart: { type: 'pie' },
        dataLabels: {
            enabled: true,
            formatter: function (_, opts) {
                return options.labels?.[opts.seriesIndex] || '';
            }
        },
        colors: ["#6991E5","#DDF0FF", "#FEEBBB","#EABAC2","#CE5374"],
        legend: {
            show: false
        }
    };

    // Render the PieChart component from react-apexcharts with the provided options and series data
    return (
        <Chart
            options={options}
            series={Object.values(productCount)}
            type='pie'
            width={280}
            height={280}
        />
    );
};

export default PieChart;