import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry, setTopic, setSource, setTitle } from '../reducer';
import { XMarkIcon } from '@heroicons/react/20/solid';

const SearchFilter = ({ SearchName }) => {
    const dispatch = useDispatch()
    const filterquery = useSelector(state => state.data[SearchName]);
    console.log(filterquery)
    const setSearchRedux = (e) => {
        if(SearchName === 'country'){
            dispatch(setCountry({
                country : e.target.value
            }));
        }else if(SearchName === 'topic'){
            dispatch(setTopic({
                topic : e.target.value
            }));
        }else if(SearchName === 'source'){
            dispatch(setSource({
                source :e.target.value
            }));
        }else if(SearchName === 'title'){
            dispatch(setTitle({
                title : e.target.value
            }));
        }
    }

    const reset=()=>{
        if(SearchName === 'country'){
            dispatch(setCountry({
                country : ""
            }));
        }else if(SearchName === 'topic'){
            dispatch(setTopic({
                topic : ""
            }));
        }else if(SearchName === 'source'){
            dispatch(setSource({
                source : ""
            }));
        }else{
            dispatch(setTitle({
                title : ""
            }));
        }
    }

  return (
    <div className=''>
        <h3 className='text-md py-2 px-1'>{SearchName}</h3>
        <div className='flex justify-end items-center'>
        <input 
            type="text" 
            className='w-full p-1 bg-gray-900 border rounded-md text-gray-200 border-gray-300' 
            value={filterquery} 
            onChange={setSearchRedux}
        />
        {(filterquery!=="") && <XMarkIcon height={24} width={24} className='relative' onClick={reset}/>}
        </div>
    </div>
  )
}

export default SearchFilter;