import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import SideNav from './Components/SideNav'
import Main from './Components/Main'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from './reducer'
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const MainApp = () => {
  const dispatch = useDispatch();
  const { user , usertoken } = useSelector(state => state.data);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user || !usertoken){
        navigate('/login');
    }
  }, [usertoken])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const dataset = await fetch(`${BACKEND_URL}/data`);
    const data = await dataset.json();
    dispatch(setData({
      data : data.data
    }));
  }


  const [sideNavOpen, setsideNavOpen] = useState(false)

  const changeSideNav = () => {
    setsideNavOpen(!sideNavOpen);
  }

  return (
    <>
      <div>
        <Navbar changeSideNav={changeSideNav} sideNavOpen={sideNavOpen} />
        <div className="flex overflow-hidden bg-gray-900 pt-16">
          <SideNav changeSideNav={changeSideNav} sideNavOpen={sideNavOpen} />
          <Main />
        </div>
      </div>
    </>
  )
}

export default MainApp;