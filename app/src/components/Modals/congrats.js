import React from "react";
import { Box, Text, Title, Spacer, Buttom, Cover } from "..";

import { Image } from 'react-native';


const CongratsModal = () => {
    return(
        <Box
            background='light'
            hasPadding
            justify='center'
            align='center'
            style={{
                position: 'absolute',
                zIndex: 9999,
                width: '100%',
                height: '100%',
            }}
        >
            <Image
                source={{uri: 'https://cdn.dribbble.com/users/23969/screenshots/2112979/media/08d210f89d44239a5b6d657faba54f60.gif'}}
                style={{ width: 400, height: 400 }}
            />


            <Spacer size='50px'/>
            <Title>Order Completed!</Title>
            <Spacer/>

            <Text>order completed succsessfully, come back often!</Text>

            <Spacer size='50px'/>
            <Buttom block>
                <Text color='light'>Track your order</Text>
            </Buttom>
        </Box>
    )
}

export default CongratsModal