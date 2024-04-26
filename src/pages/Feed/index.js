import React, { useState, useEffect } from "react";

import {Spacer, Box, ScrollViewL, Text} from '../../components'

import Header from "../../components/Header";
import StoryList from "../../components/Story/list";
import PostList from "../../components/Post/list";
import api from "../../services/api";

const Feed = ({navigation}) => {
    const [loading, setLoading] = useState(false)
    const [feed, setFeed] = useState({
        stories: [],
        posts: []
    })

    const getFeed = () => {
        try{
            setLoading(true)
            const { data: feedData } = api.get('/feed')
            console.log(feedData)
            setFeed(feedData)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err.message)
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFeed()
        })

        return unsubscribe
    },[navigation])

    return(
        <Box background='light'>
            <Header title='Explore'/>
            <ScrollViewL>
                <StoryList stories={feed?.stories}/>
                <Spacer/>
                <PostList posts={feed?.posts}/>
            </ScrollViewL>
        </Box>
    )
}

export default Feed
