import React from "react";
import {Text, Box } from '../../components'
import Post from ".";

const PostList = ({posts}) => {
    return(
    <Box>
        {posts?.map(post => (
            <Post post={post}/>
        ))}
    </Box>
    )
}

export default PostList
