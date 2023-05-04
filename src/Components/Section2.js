import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Section2 = () => {
    const {data} = useSelector(state => state.data);
    const [totaldatapoint, setTotaldatapoint] = useState(0)
    const [dataPointThisYear, setDataPointThisYear] = useState(0);
    const [dataPointThisMonth, setDataPointThisMonth] = useState(0)

    function countAddedThisYear(data) {
        const now = new Date();
        const currentYear = now.getFullYear();
        
        let count = 0;
        for (let i = 0; i < data.length; i++) {
          const dateStr = data[i].added;
          if (dateStr) {
            const addedDate = new Date(dateStr);
            const addedYear = addedDate.getFullYear();
            if (addedYear === currentYear) {
              count++;
            }
          }
        }
        
        return count;
      }

      function getDataPointsAddedThisMonth(data) {
        const now = new Date();
        const thisMonth = now.getMonth();
        let count = 0;
        for (let i = 0; i < data.length; i++) {
          const date = new Date(data[i].timestamp);
          if (date.getMonth() === thisMonth) {
            count++;
          }
        }
        return count;
      }
      
      

    useEffect(() => {
        setTotaldatapoint(data.length)
        const c = countAddedThisYear(data);
        setDataPointThisYear(c);
        const thismonth = getDataPointsAddedThisMonth(data);
        setDataPointThisMonth(thismonth);
    }, [data])
    
    return (
        <>
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{totaldatapoint}</span>
                            <h3 className="text-base font-normal text-gray-500">Data Points</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{dataPointThisYear}</span>
                            <h3 className="text-base font-normal text-gray-500">Data points Added this year</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{dataPointThisMonth}</span>
                            <h3 className="text-base font-normal text-gray-500">Data Point Added this month</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2;
