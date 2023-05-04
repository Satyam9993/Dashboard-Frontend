import React from 'react';
import { Link } from 'react-router-dom';
import { setLogout } from '../reducer';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = ({ changeSideNav, sideNavOpen }) => {
    const { user, usertoken } = useSelector(state => state.data);
    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(setLogout());
    }

    return (
        <nav className="bg-gray-900 text-gray-100 border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-100 hover:text-gray-500 cursor-pointer p-2 hover:bg-gray-800 focus:bg-gray-800 focus:ring-2 focus:ring-gray-100 rounded" onClick={changeSideNav}>
                            {!sideNavOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }
                        </button>
                        <Link to="/" className="text-xl font-bold flex items-center lg:ml-2.5">
                            <span className="self-center whitespace-nowrap">DashBord</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {(!user && !usertoken) ?
                            <Link to="/login" className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                                Login
                            </Link> :
                            <button className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3" onClick={LogOut}>
                                Logout
                            </button>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
