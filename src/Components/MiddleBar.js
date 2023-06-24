import React, { useContext } from 'react'
import PostCard from './PostCard'
import "../Styles/MiddleBar.css"
import { PostContext } from '../Context/PostContext'

const MiddleBar = () => {
  const { sortedData } = useContext(PostContext)

  return (
    <div className="post-container">
      {sortedData?.map((item) => <PostCard item={item} key={item.postId}/>)}
    </div>
  )
}

export default MiddleBar