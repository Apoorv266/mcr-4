import React, { useContext, useState } from 'react'
import "../Styles/RightBar.css"
import { PostContext } from '../Context/PostContext';


const RightBar = () => {
    const { setsortState } = useContext(PostContext)

    const handleChange = (e) => {
        setsortState(e.target.value)
    }

    return (
        <div className='rightbar-main'>
            <h1>Sort By:</h1>
            <select onChange={handleChange}>
                <option value="latest-post">Latest post</option>
                <option value="most-upvoted">Most upvoted</option>
            </select>
        </div>
    )
}

export default RightBar