import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import DoughnutGraph from './DoughnutGraph';

const Section3Left = () => {
    const { data } = useSelector(state => state.data);
    const [labels, setLabels] = useState(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange1']);
    const [dataset, setDataset] = useState([12, 19, 3, 5, 2, 3, 100]);
    
    const countEntriesByCountry = () => {
        let result = {};
        data.forEach(entry => {
            if (!result[entry.country.trim()]) {
                result[entry.country.trim() === '' ? "NAN" : entry.country.trim()] = 1;
            } else {
                result[entry.country.trim()]++;
            }
        });
        setLabels(Object.keys(result));
        setDataset(Object.values(result));
    }
    useEffect(() => {
        countEntriesByCountry()
    }, [data])
    
    return (
        <>
            <div className="text-gray-100 bg-gray-900 shadow rounded-lg mb-4 p-2 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-100">Data According country Country</h3>
                </div>
                <div className="flow-root">
                    <DoughnutGraph labels={labels} dataset={dataset}/>
                </div>
            </div>
        </>
    )
}

export default Section3Left;