import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollableContent from "./ScrollableContent.tsx";
import ChartsComponent from "./charts/ChartsComponent.tsx";
import InformationList from "./InformationList.tsx";

// Defines a TypeScript interface for the product
interface Product {
    id: number;
    name: string;
    quantity_sold: number;
    price_per_unit: number;
    sale_date: string;
}

interface SalesAnalyticsProps {
    filterDates: {
        startDate: string;
        endDate: string;
    };
}


const SalesAnalytics: React.FC<SalesAnalyticsProps> = ({ filterDates }) => {

    // Using react hooks to set and update state for various data fields
    const [products, setProducts] = useState<Product[]>([]);
    const [totalSold, setTotalSold] = useState<number>(0);
    const [mostPopular, setMostPopular] = useState<string>('');
    const [totalRevenue, setTotalRevenue] = useState<number>(0);
    const [leastPopular, setLeastPopular] = useState<string>('');
    const [bestMonth, setBestMonth] = useState<string>('');
    const [worstMonth, setWorstMonth] = useState<string>('');

    // Fetch the data from the JSON file and set the state
    useEffect(() => {
        axios.get('/paper-sales.json')
            .then(response => {
                const data: Product[] = response.data.products;

                // Convert filter dates to milliseconds for comparison
                const startMilliseconds = new Date(filterDates.startDate).getTime();
                const endMilliseconds = new Date(filterDates.endDate).getTime();

                // Only include data within the filter dates
                const filteredData = data.filter(product => {
                    const productMilliseconds = new Date(product.sale_date).getTime();
                    return productMilliseconds >= startMilliseconds && productMilliseconds <= endMilliseconds;
                });

                setProducts(filteredData);
                calculateMetrics(filteredData);
            });
    }, [filterDates]);

    // Function to calculate various metrics such as total sold, most popular etc.
    const calculateMetrics = (data: Product[]) => {
        const totalSold = data.reduce((acc, product) => acc + product.quantity_sold, 0);
        const mostPopular = data.reduce((prev, current) => (prev.quantity_sold > current.quantity_sold) ? prev : current).name;
        const totalRevenue = data.reduce((acc, product) => acc + (product.quantity_sold * product.price_per_unit), 0);
        const leastPopular = data.reduce((prev, current) => (prev.quantity_sold < current.quantity_sold) ? prev : current).name;

        // Logic to calculate sales by month and find best and worst month
        const salesByMonth: { [key: string]: number } = {};
        const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        data.forEach((product) => {
            const month = product.sale_date.split('-')[1];

            if(salesByMonth[month]) {
                salesByMonth[month] += product.quantity_sold;
            } else {
                salesByMonth[month] = product.quantity_sold;
            }
        });

        // Finds best and worst month based on sales
        const bestMonthNumber = Object.keys(salesByMonth).reduce((a, b) => salesByMonth[a] > salesByMonth[b] ? a : b);
        const worstMonthNumber = Object.keys(salesByMonth).reduce((a, b) => salesByMonth[a] < salesByMonth[b] ? a : b);

        // Get actual month name by comparing the month number with the array of month names
        const bestMonth = monthNames[parseInt(bestMonthNumber)];
        const worstMonth = monthNames[parseInt(worstMonthNumber)];

        // set the calculated values in the state
        setTotalSold(totalSold);
        setMostPopular(mostPopular);
        setTotalRevenue(totalRevenue);
        setLeastPopular(leastPopular);
        setBestMonth(bestMonth);
        setWorstMonth(worstMonth);
    };

    // Render the ScrollableContent with  ChartsComponent and InformationList components with provided data
    return (
        <ScrollableContent>
            <ChartsComponent data={products}/>
            <InformationList totalSold={totalSold} mostPopular={mostPopular} totalRevenue={totalRevenue} leastPopular={leastPopular} bestMonth={bestMonth} worstMonth={worstMonth}/>
        </ScrollableContent>
    );
};

export default SalesAnalytics;
