import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string
};

type PieChartProps = {
    data: ProductData[]
};

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

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    // Calculate product count
    const productCount = getProductCount(data);

    const options: ApexOptions = {
        labels: Object.keys(productCount),
        chart: { type: 'pie' },
        dataLabels: {
            enabled: true,
            formatter: function (_, opts) {
                // Provides the correct label for each pie slice
                return options.labels?.[opts.seriesIndex] || '';
            }
        },
        colors: ["#6991E5","#DDF0FF", "#FEEBBB","#EABAC2","#CE5374"],
        legend: {
            show: false  // Hides the legend
        }
    };

    return (
        <Chart
            options={options}
            series={Object.values(productCount)}   // The values for each pie slice
            type='pie'
            width={280}
            height={280}
        />
    );
};

export default PieChart;