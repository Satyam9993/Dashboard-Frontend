import React from 'react'
import { useSelector } from 'react-redux'

const Section1Right = () => {
    const { data } = useSelector((state) => state.data)
    return (
        <>
            <div className="text-gray-100 bg-gray-900 border-2 border-gray-400 rounded-lg shadow p-4 sm:p-6 xl:p-4 ">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">List of Data</h3>
                        <span className="text-base font-normal text-gray-500">This is a list of data.</span>
                    </div>
                </div>
                <div className="flex flex-col mt-8 h-[470px]">
                    <div className="overflow-x-auto overflow-y-auto rounded-lg">
                        <div className="align-middle inline-block min-w-full">
                            <div className="shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                Sector
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                Region
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                Added On
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                Pestle
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                Insight
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-white overflow-hidden">
                                        {
                                            data.map((d) => (
                                                <tr className="bg-gray-900" key={d._id}>
                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-400 rounded-lg rounded-left">
                                                        <span className="font-semibold">{d.sector === '' ? "NAN" : d.sector}</span>
                                                    </td>
                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                        {d.region === '' ? "NAN" : d.region}
                                                    </td>
                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                                        {d.added === '' ? "NAN" : d.added}
                                                    </td>
                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                                        {d.pestle === '' ? "NAN" : d.pestle}
                                                    </td>
                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                                        {d.insight === '' ? "NAN" : d.insight}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1Right
