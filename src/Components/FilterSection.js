import React, { useEffect } from 'react';
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { setEnd_Year, setSector, setRegion, setPestle } from '../reducer';



const FilterSection = ({ filterName, filterValue, filterId }) => {
    const dispatch = useDispatch()
    const [fileterData, setFileterData] = useState([])
    const filterquery = useSelector(state => state.data[filterName]);
    
    useEffect(() => {
        const data = filterValue.map(fil => { return { 'value': fil, 'label': (fil.trim()=== "" ? "NAN":fil), 'checked': filterquery.includes(fil) ? true : false } });
        setFileterData(data)
    }, [filterquery])
    

    const filters = [
        {
            id: filterId,
            name: filterId,
            options: fileterData
        }
    ]

    const removeElement = (arr, element) => {
        const filteredArray = arr.filter(item => item !== element);
        return filteredArray;
    }

    const unSelectItem = (d) => {
        if (filterName === "end_year") {
            if (filterquery.includes(d)) {
                dispatch(setEnd_Year({
                    end_year: removeElement(filterquery, d)
                }));

            } else {
                dispatch(setEnd_Year({
                    end_year: [...filterquery, d]
                }));
            }
        } else if (filterName === "sector") {
            
            if (filterquery.includes(d)) {
                dispatch(setSector({
                    sector: removeElement(filterquery, d)
                }));

            } else {
                dispatch(setSector({
                    sector: [...filterquery, d]
                }));
            }
        }else if (filterName === "region") {
            if (filterquery.includes(d)) {
                dispatch(setRegion({
                    region: removeElement(filterquery, d)
                }));
            } else {
                dispatch(setRegion({
                    region: [...filterquery, d]
                }));
            }
        }else if (filterName === "pestle") {
            if (filterquery.includes(d)) {
                dispatch(setPestle({
                    pestle: removeElement(filterquery, d)
                }));
            } else {
                dispatch(setPestle({
                    pestle: [...filterquery, d]
                }));
            }
        }
         else {

        }
    }

    return (
        <>
            {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-gray-900 py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-400">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                onClick={() => unSelectItem(option.value)}
                                                className="h-4 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-200"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    )
}

export default FilterSection