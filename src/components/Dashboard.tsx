import SalesAnalytics from "./SalesAnalytics.tsx";
import Filter from "./Filter.tsx";
import {useState} from "react";



// Define the Dashboard component to display the sales analytics with the buttons
const Dashboard = () => {

    type ButtonProps = {
        title: string;
    }

    // Define the Button component to display the buttons
    // For each button, the title is passed as a prop
    // All products button is with opacity 50 because its not active
    const Button = ({title}: ButtonProps) => (
        <button className={`tab-btn text-nowrap font-semibold ${title === "ALL PRODUCTS" ? 'opacity-50' : 'opacity-100'}`}>
            {title}
        </button>
    );


    // An array of strings to be used as button titles.
    const buttonTitles = ["OVERVIEW", "ALL PRODUCTS"];

    // Define filter state in Dashboard component
    const [filterDates, setFilterDates] = useState({
        startDate: '1900-01-01',
        endDate: '2099-12-31'
    });

    return (
        <section className="flex-1 flex-col justify-between w-full">

            {/* Title of the dashboard */}
            <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 pl-4">
                Dashboard
            </h2>

            {/* Buttons to switch between the analytics */}
            <section className="flex flex-row justify-between px-4 border-b-2 border-[#260065] pt-2 pb-1">
                <div className="flex flex-row gap-x-8 overflow-x-auto no-scrollbar text-xs md:text-sm lg:text-base">
                    {buttonTitles.map(title => <Button title={title} key={title} />)}
                </div>

                {/* Render the Filter component */}
                <Filter setFilterDates={setFilterDates}/>

            </section>

            {/* Render the SalesAnalytics component */}
            <SalesAnalytics filterDates={filterDates}/>

        </section>
    );
};

export default Dashboard;