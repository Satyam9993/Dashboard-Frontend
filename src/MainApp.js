import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import SideNav from './Components/SideNav'
import Main from './Components/Main'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from './reducer'
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const MainApp = () => {
  const dispatch = useDispatch();
  const { user , usertoken } = useSelector(state => state.data);
  const [sideNavOpen, setsideNavOpen] = useState(false)
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user || !usertoken){
        navigate('/login');
    }
  }, [usertoken])

  useEffect(() => {
    setProgress(10)
    fetchData();
    setProgress(100);
    setProgress(0);
  }, [])

  const fetchData = async () => {
    setProgress(40);
    const dataset = await fetch(`${BACKEND_URL}/data`);
    setProgress(70);
    const data = await dataset.json();
    dispatch(setData({
      data : data.data  
    }));
    setProgress(90);
  }



  const changeSideNav = () => {
    setsideNavOpen(!sideNavOpen);
  }

  return (
    <>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar changeSideNav={changeSideNav} sideNavOpen={sideNavOpen}/>
        <div className="flex overflow-hidden bg-gray-900 pt-16">
          <SideNav changeSideNav={changeSideNav} sideNavOpen={sideNavOpen} setProgress={setProgress} />
          <Main setProgress/>
        </div>
      </div>
    </>
  )
}

export default MainApp;