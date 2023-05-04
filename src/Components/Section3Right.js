import React, { useEffect, useState } from 'react'
import Bargraph from './Bargraph'
import { useSelector } from 'react-redux';

const Section3Right = () => {
    const { data } = useSelector(state => state.data);
    const [labels, setLabels] = useState(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange1']);
    const [dataset, setDataset] = useState([12, 19, 3, 5, 2, 3, 100]);
    const [labels1, setLabels1] = useState(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange1']);
    const [dataset1, setDataset1] = useState([12, 19, 3, 5, 2, 3, 100]);
    
    const countEntriesByTopic = () => {
        let result = {};
        data.forEach(entry => {
            if (!result[entry.topic.trim()]) {
                result[entry.topic.trim() === '' ? "NAN" : entry.topic.trim()] = 1;
            } else {
                result[entry.topic.trim()]++;
            }
        });
        setLabels(Object.keys(result));
        setDataset(Object.values(result));
    }
    const countEntriesBySector = () => {
        let result = {};
        data.forEach(entry => {
            if (!result[entry.sector.trim()]) {
                result[entry.sector.trim() === '' ? "NAN" : entry.sector.trim()] = 1;
            } else {
                result[entry.sector.trim()]++;
            }
        });
        setLabels1(Object.keys(result));
        setDataset1(Object.values(result));
    }
    useEffect(() => {
        countEntriesByTopic()
        countEntriesBySector()
    }, [data])
    return (
        <>
            <div className="bg-gray-900 text-gray-200 h-full border-2 border-gray-400 shadow rounded-lg sm:p-2 xl:p-2 ">
                <h3 className="text-xl leading-none font-bold mb-10 text-center">Overview</h3>
                <div className="w-full h-full">
                    <Bargraph labels={labels} dataset={dataset} color={"yellow"} title={"Topic Wise Data"}/>
                    <Bargraph labels={labels1} dataset={dataset1} color={"blue"} title={"Sector Wise Data"} />
                </div>
            </div>
        </>
    )
}

export default Section3Right
