import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollableContent from "./ScrollableContent.tsx";
import ChartsComponent from "./charts/ChartsComponent.tsx";
import InformationList from "./InformationList.tsx";

interface Product {
    id: number;
    name: string;
    quantity_sold: number;
    price_per_unit: number;
    sale_date: string;
}

const SalesAnalytics: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalSold, setTotalSold] = useState<number>(0);
    const [mostPopular, setMostPopular] = useState<string>('');
    const [totalRevenue, setTotalRevenue] = useState<number>(0);
    const [leastPopular, setLeastPopular] = useState<string>('');
    const [bestMonth, setBestMonth] = useState<string>('');
    const [worstMonth, setWorstMonth] = useState<string>('');

    useEffect(() => {
        axios.get('../../public/paper-sales.json')
            .then(response => {
                const data: Product[] = response.data.products;
                setProducts(data);
                calculateMetrics(data);
            });
    }, []);

    const calculateMetrics = (data: Product[]) => {
        const totalSold = data.reduce((acc, product) => acc + product.quantity_sold, 0);
        const mostPopular = data.reduce((prev, current) => (prev.quantity_sold > current.quantity_sold) ? prev : current).name;
        const totalRevenue = data.reduce((acc, product) => acc + (product.quantity_sold * product.price_per_unit), 0);
        const leastPopular = data.reduce((prev, current) => (prev.quantity_sold < current.quantity_sold) ? prev : current).name;

        const salesByMonth: { [key: string]: number } = {};
        const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        data.forEach((product) => {
            // assuming sale_date is in format YYYY-MM-DD
            const month = product.sale_date.split('-')[1];

            if(salesByMonth[month]) {
                salesByMonth[month] += product.quantity_sold;
            } else {
                salesByMonth[month] = product.quantity_sold;
            }
        });

        const bestMonthNumber = Object.keys(salesByMonth).reduce((a, b) => salesByMonth[a] > salesByMonth[b] ? a : b);
        const worstMonthNumber = Object.keys(salesByMonth).reduce((a, b) => salesByMonth[a] < salesByMonth[b] ? a : b);

        const bestMonth = monthNames[parseInt(bestMonthNumber)];
        const worstMonth = monthNames[parseInt(worstMonthNumber)];
        setTotalSold(totalSold);
        setMostPopular(mostPopular);
        setTotalRevenue(totalRevenue);
        setLeastPopular(leastPopular);
        setBestMonth(bestMonth);
        setWorstMonth(worstMonth);
    };

    return (
        <ScrollableContent>
            <ChartsComponent data={products}/>
            <InformationList totalSold={totalSold} mostPopular={mostPopular} totalRevenue={totalRevenue} leastPopular={leastPopular} bestMonth={bestMonth} worstMonth={worstMonth}/>
        </ScrollableContent>
    );
};

export default SalesAnalytics;
