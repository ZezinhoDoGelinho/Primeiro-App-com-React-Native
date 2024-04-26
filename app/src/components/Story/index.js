import React from "react";
import moment from "moment";

import {Cover, Box, Tochable, Text} from '../'
import { colors } from '../../styles/theme.json' 


const Story = ({story}) =>{
    console.log(story)
    return(
        <Tochable 
        background='black'
        radius='10px'
        height='190px'
        width='150px'
        spacing='0px 5px 0px'
        >
        <Cover 
        width='100%'
        height='100%'
        image={story?.cover}>
            <Box fluid hasPadding
            background={`${colors.dark}80`}
            justify='space-between'
            >
                <Cover
                circle
                width='40px'
                height='40px'
                border={`1px solid ${colors.light}`}
                image={story?.owner?.photo}></Cover>

                <Box height='50px' justify='flex-end'>
                    <Text bold color='light'>{story?.owner?.username}</Text>
                    <Text color='light' variant='small'>{moment(story?.createdAt).fromNow}</Text>
                </Box>
            </Box>
        </Cover>
        </Tochable>
    )
}

export default Story