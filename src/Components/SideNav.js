import React from 'react'
import FilterSection from './FilterSection';
import { setData, setLogout } from '../reducer';
import { useDispatch, useSelector } from 'react-redux';
import SearchFilter from './SearchFilter';
import {
    filterValuesbyEnd_Year,
    filterValuesbySector,
    filterValuesbyRegion,
    filterValuesbyPestle
} from '../utils/Contant';
import { Link } from 'react-router-dom';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;



const SideNav = ({ changeSideNav, sideNavOpen }) => {
    const dispatch = useDispatch();
    const {user, usertoken} = useSelector(state => state.data);
    const {
        end_year,
        sector,
        region,
        pestle,
        country,
        topic,
        source,
        title
    } = useSelector(state => state.data);

    const ApplyFilter = async () => {
        const body = {
            end_year,
            sector,
            region,
            pestle,
            country,
            topic,
            source,
            title
        };
        const dataset = await fetch(`${BACKEND_URL}/filter`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body), 
          });

        const data = await dataset.json();
        dispatch(setData({
            data: data.data
        }));
    };

    const logout = ()=> {
        dispatch(setLogout());
    }

    return (
        <>
            <aside id="sidebar" className={`fixed ${!sideNavOpen && "hidden"} z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`} aria-label="Sidebar">
                <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-900 pt-0">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 bg-gray-900 text-gray-100 divide-y space-y-1">
                            <ul className="space-y-2 pb-2">
                                <li className='flex justify-between items-center'>
                                    <h3 className="tex-gray-100 font-bold">Filters</h3>
                                    <div className="font-medium border-2 p-2 border-white text-gray-400 hover:text-blue-600 cursor-pointer" onClick={ApplyFilter}>Apply Filter</div>
                                </li>
                                <li>
                                    <SearchFilter SearchName={'country'} />
                                    <SearchFilter SearchName={'topic'} />
                                    <SearchFilter SearchName={'source'} />
                                    <SearchFilter SearchName={'title'} />
                                    <FilterSection filterName={'end_year'} filterValue={filterValuesbyEnd_Year} filterId={"End_Year"} />
                                    <FilterSection filterName={'sector'} filterValue={filterValuesbySector} filterId={"Sector"} />
                                    <FilterSection filterName={'region'} filterValue={filterValuesbyRegion} filterId={"Region"} />
                                    <FilterSection filterName={'pestle'} filterValue={filterValuesbyPestle} filterId={"Pestle"} />
                                </li>
                                <li className='w-full'>
                                    {(!user || !usertoken) ?<Link to="/login" className="font-medium border-2 p-2 border-white text-gray-400 hover:text-blue-600 cursor-pointer">Login</Link>:
                                    <button className="font-medium border-2 p-2 border-white text-gray-400 hover:text-blue-600 cursor-pointer" onClick={logout}>Logout</button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <div className={`bg-gray-900 opacity-50 ${!sideNavOpen && "hidden"} fixed inset-0 z-10`} id="sidebarBackdrop" onClick={changeSideNav}></div>
        </>
    )
}

export default SideNav;
