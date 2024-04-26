import React from "react";

import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { Box, Title, Text, Spacer } from "..";
import {colors} from '../../styles/theme.json'

const Order = () => {
    return(
        <Box 
        radius='5px'
        spacing='0px 0px 10px 0px'
        border={`1px solid ${colors.muted}50`}>
            <Box 
            hasPadding 
            row 
            width='100%'
            justify='space-between'
            style={{ borderBottomWidth: 1, borderColor: '#95afc080',}}
            >
                <Box row align='center'>
                    <Icon name='check' size={20} color={colors.success}/>
                    <Text color='success' spacing='0px 0px 0px 10px'>DELIVERED</Text>
                </Box>
                <Text>August 17, 2024 3:58 PM</Text>
            </Box>
            <Box hasPadding width='100%'  style={{ borderBottomWidth: 1, borderColor: '#95afc080',}}>
                <Title bold>Order N 1947034</Title>
                <Spacer/>
                <Text>Track number: <Text color='dark'>IW34252625</Text></Text>
            </Box>
            <Box 
            hasPadding 
            row 
            width='100%'
            justify='space-between'>
                <Text>VALUE OF ITEMS: <Text color='dark'>R$ 380,00</Text></Text>
                <Text>QUANTITY: <Text color='dark'>3</Text></Text>
            </Box>
        </Box>
    )
}

export default Order