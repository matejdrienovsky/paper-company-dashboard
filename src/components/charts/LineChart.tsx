import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

type ProductData = {
    id: number,
    name: string,
    quantity_sold: number,
    price_per_unit: number,
    sale_date: string // Assuming the date string is in "YYYY-MM-DD" format
};

type LineChartProps = {
    data: ProductData[]
};

const LineChart: React.FC<LineChartProps> = ({ data }) => {
    const [series, setSeries] = useState<{name: string; data: { x: string, y: number }[]}[]>([]);

    useEffect(() => {
        const chartData = data.reduce<{ [date: string]: number }>((total, item) => {
            const saleMonthYear = item.sale_date.slice(0, 7); // Get the "YYYY-MM" part of the string
            total[saleMonthYear] = (total[saleMonthYear] || 0) + item.quantity_sold;
            return total;
        }, {});

        setSeries([{
            name: 'Sales',
            data: Object.entries(chartData).sort().map(([date, value]) => ({ x: date, y: value }))
        }]);
    }, [data]);

    return (
        <Chart
            options={{
                chart: { type: 'line', height: 240, toolbar: { show: false }},
                colors: ["#6991E5"],
                stroke: { lineCap: 'round', curve: 'smooth' },
                markers: { size: 0 },
                xaxis: {
                    labels: { style: { colors: '#260065', fontSize: '12px', fontFamily: 'inherit', fontWeight: 400 }},
                    type: 'datetime',
                },
                yaxis: {
                    labels: { style: { colors: '#260065', fontSize: '12px', fontFamily: 'inherit', fontWeight: 400 }},
                },
                grid: { show: true, borderColor: '#dddddd', strokeDashArray: 5, xaxis: { lines: { show: true }}, padding: { top: 5, right: 20 }},
                fill: { opacity: 0.8 },
                tooltip: { theme: 'dark' },
            }}
            series={series}
            type='line'
            height={240}
        />
    );
};

export default LineChart;