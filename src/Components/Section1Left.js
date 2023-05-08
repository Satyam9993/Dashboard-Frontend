import React, { useEffect, useState } from 'react';
import LineGraph from './LineGraph';
import { useSelector } from 'react-redux';


const Section1Left = () => {
    const { data } = useSelector((state) => state.data);
    const [title, setTitle] = useState("")
    useEffect(() => {
        countEntriesPestle();
        setactivetab('Pestle');
    }, [data]);

    const countEntriesByRegion = () => {
        let result = {};
        data.forEach(entry => {
            if (!result[entry.region.trim()]) {
                result[entry.region.trim() === '' ? "NAN" : entry.region.trim()] = 1;
            } else {
                result[entry.region.trim()]++;
            }
        });
        setLabels(Object.keys(result));
        setDataset(Object.values(result));
        setTitle("Group by Region");
    }

    const countEntriesPestle = () => {
        let result = {};
        data.forEach(entry => {
            if (!result[entry.pestle.trim()]) {
                result[entry.pestle.trim() == '' ? "NAN" : entry.pestle.trim()] = 1;
            } else {
                result[entry.pestle.trim()]++;
            }
        });
        setLabels(Object.keys(result));
        setDataset(Object.values(result));
        setTitle("Group by Pestle");
    }

    const [activetab, setactivetab] = useState("Pestle");
    const [dataset, setDataset] = useState([344, 72, 329, 99, 20, 93, 11, 2, 26, 4]);
    const [labels, setLabels] = useState(['Industries', 'Environmental', 'Economic', 'Political',
        'Technological', 'NAN', 'Organization', 'Healthcare', 'NAN',
        'Lifestyles']);

    const changeTab = (tab) => {
        if (tab == 'Pestle') {
            countEntriesPestle();
            setactivetab('Pestle');
        } else{
            countEntriesByRegion()
            setactivetab('Region');
        }
    }

    return (
        <>
            <div className="bg-gray-900 shadow rounded-lg sm:p-6 xl:p-8  2xl:col-span-2">
                <div className='relative'>
                    <ul className='flex flex-row py-2 items-center justify-center'>
                        <div className='pr-2 mr-2'>
                            <li className={`border-b-2 ${activetab === 'Pestle' ? "border-blue-500" : "border-none"}`} onClick={() => changeTab("Pestle")}>Pestle</li>
                        </div>
                        <div className='pr-2 mr-2'>
                            <li className={`border-b-2 ${activetab === 'Region' ? "border-blue-500" : "border-none"}`} onClick={() => changeTab("Region")}>Region</li>
                        </div>
                    </ul>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                        <h3 className="text-base font-normal text-gray-500">Total Data Point</h3>
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-400">{data.length}</span>
                    </div>
                </div>
                <LineGraph dataset={dataset} labels={labels} title={title}/>
            </div>
        </>
    )
}

export default Section1Left;
