import React, { useState } from 'react'
import "../Styles/RightBar.css"


const RightBar = () => {
    const [data, setData] = useState("");

    const handlechange = (e) => {
        setData(e.target.value)
    };
    return (
        <div className='rightbar-main'>
            <h1>Sort By:</h1>
            <select onChange={handlechange}>
                <option value="latest-post">Latest post</option>
                <option value="most-upvoted">Most upvoted</option>
            </select>
        </div>
    )
}

export default RightBar