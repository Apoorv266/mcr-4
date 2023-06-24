import React, { createContext, useState } from 'react'
import { forumData } from '../Data/Data'

export const PostContext = createContext()
const PostContextWrapper = ({ children }) => {
  const [userData, setuserData] = useState(forumData)
  const [sortState, setsortState] = useState("")
  const [posts, setposts] = useState(forumData.posts)

  const upVoteFunc = (id, vote) => {
    const newData = posts?.map((item) => item.postId === id ? { ...item, upvotes: item.upvotes + 1 } : item)
    setposts(newData)
  }

  const downVoteFunc = (id) => {
    const newData = posts?.map((item) => item.postId === id ? { ...item, downvotes: item.downvotes + 1 } : item)
    setposts(newData)
  }

  const bookMarkFunc = (id) => {
    const newData = posts?.map((item) => item.postId === id ? { ...item, isBookmarked: !item.isBookmarked } : item)
    setposts(newData)
  }

  const sortedData = sortState ? sortState === "latest-post" ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [...posts].sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)) : posts

  return (
    <PostContext.Provider value={{ sortedData, upVoteFunc, bookMarkFunc, setsortState, userData, posts, downVoteFunc }}>{children}</PostContext.Provider>
  )
}

export default PostContextWrapper