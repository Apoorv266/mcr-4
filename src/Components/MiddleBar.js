import React, { useContext } from 'react'
import PostCard from './PostCard'
import "../Styles/MiddleBar.css"
import { PostContext } from '../Context/PostContext'

const MiddleBar = () => {
  const { postData } = useContext(PostContext)
  const { posts } = postData
  return (
    <div className="post-container">
      {posts.map((item) => <PostCard item={item} key={item.postId}/>)}
    </div>
  )
}

export default MiddleBar