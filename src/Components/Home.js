import React from 'react'
import "../Styles/Home.css"
import SideNavbar from './SideNavbar'
import MiddleBar from './MiddleBar'
import RightBar from './RightBar'
const Home = () => {
    return (
        <div className='home-main'>
            <SideNavbar />
            <MiddleBar />
            <RightBar />
        </div>
    )
}

export default Home