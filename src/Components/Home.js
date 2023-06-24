import React from 'react'
import "../Styles/Home.css"
import SideNavbar from './SideNavbar'
import MiddleBar from './MiddleBar'
import RightBar from './RightBar'
import { Route, Routes } from 'react-router-dom'
import SinglePost from './SinglePost'
const Home = () => {
    return (
        <div className='home-main'>
            <SideNavbar />
            <Routes>
                <Route path='/' element={<MiddleBar />} />
                <Route path="/post/:id" element={<SinglePost />} />
            </Routes>

            <RightBar />
        </div>
    )
}

export default Home