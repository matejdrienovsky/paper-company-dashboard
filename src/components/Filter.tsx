import React, { useState } from 'react';

// Define the props for the Filter component
interface FilterProps {
    setFilterDates: (value: {
        startDate: string;
        endDate: string;
    }) => void;
}

// Define the Filter component
const Filter: React.FC<FilterProps> = ({setFilterDates}) => {
    // Define the state for the dropdown visibility and the date inputs
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Define the function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    // Define the function to handle the apply button click
    const handleApplyClick = () => {
        const defaultStartDate = '1900-01-01';
        const defaultEndDate = '2099-12-31';

        const startDateToSet = startDate !== "" ? startDate : defaultStartDate;
        const endDateToSet = endDate !== "" ? endDate : defaultEndDate;

        setFilterDates({
            startDate: startDateToSet,
            endDate: endDateToSet
        });
    }

    // Renders a button to toggle dropdown and the dropdown itself which contains date inputs and Apply button
    return (
        <div className="relative z-10">
            <button id="dropdownButton" onClick={toggleDropdown} className="inline-flex items-center text-xs md:text-sm lg:text-base font-semibold text-center rounded-lg pl-4 py-2.5" type="button">
                FILTER
            </button>

            {dropdownVisible &&
                <div className="absolute top-full right-0 -mt-2 w-48 md:w-60 rounded-lg bg-white divide-y-2 divide-[#260065]/50 outline outline-2 outline-[#260065]">
                    <ul className="text-[10px] md:text-sm px-4 py-2 space-y-3">
                        <li>
                            <div className="flex justify-between">
                                <label htmlFor="start">Start date:</label>
                                <input type="date" id="start" name="start" value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <label htmlFor="end">End date:</label>
                                <input type="date" id="end" name="end" value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
                            </div>
                        </li>
                    </ul>
                    <section>
                        <button onClick={handleApplyClick} className="block text-[10px] md:text-sm xl:text-md font-bold border-0 rounded-lg cursor-pointer bg-[#260065] text-white my-4 px-8 py-2 lg:px-12 mx-auto hover:bg-[#531DACFF] transition hover:transition">APPLY</button>
                    </section>
                </div>
            }
        </div>
    );
};

export default Filter;