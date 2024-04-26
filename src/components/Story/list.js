import React from "react";
import {Text, Box, ScrollViewL} from '../../components'
import Story from ".";

const StoryList = ({stories}) => {
    return(
        <Box fluid height='270px'>
            <Box 
            row 
            fluid 
            justify='space-between' 
            height='60px' 
            hasPadding
            >
                <Text bold color='dark'>Stories</Text>
                <Text color='danger' underline>Show all</Text>
            </Box>
            <ScrollViewL 
            horizontal
            style={{paddingLeft: 20}}
            >
                {stories?.map(story => (
                    <Story story={story}/>
                ))}
            </ScrollViewL>
        </Box>
    )
}

export default StoryList
