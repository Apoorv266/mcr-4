import React, { createContext, useState } from 'react'
import { forumData } from '../Data/Data'

export const PostContext = createContext()
const PostContextWrapper = ({children}) => {
    const [postData, setpostData] = useState(forumData)
    
  return (
    <PostContext.Provider value={{postData}}>{children}</PostContext.Provider>
  )
}

export default PostContextWrapper