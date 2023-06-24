import React, { useContext } from 'react'
import PostCard from './PostCard'
import { Link, useParams } from 'react-router-dom';
import { PostContext } from '../Context/PostContext';
import { ArrowBackCircle } from 'react-ionicons';
import CommentSection from './CommentSection';

const SinglePost = () => {
    const { id } = useParams();
    const { posts } = useContext(PostContext)
    const currPost = posts?.find((item) => item.postId === id)
    const { comments , username} = currPost

    return (
        <>
            <div className='single-post-main'>

                <div className="post-container">
                <Link to={"/"}>
                    <ArrowBackCircle
                        color={'#000000'}
                        height="50px"
                        width="50px"
                    />
                </Link>
                    <PostCard item={currPost} />
                    {comments.map((item, index) => <CommentSection key={index} item={item} username={username} />)}

                </div>
            </div>
        </>
    )
}

export default SinglePost