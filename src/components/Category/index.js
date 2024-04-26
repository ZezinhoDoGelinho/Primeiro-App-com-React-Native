import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Tochable, Cover, Title, Spacer, Box, Text } from '../'

const image = '../../assets/Nasus_0.jpg';
import {colors} from '../../styles/theme.json'

const Category = ({ title, description}) => {

    const { navigate } = useNavigation()

    return(
        <Tochable 
            onPress={() => navigate('Category')}
            width='100%' 
            heigth='180px' 
            radius='10px' 
            spacing='10px 0px'>
            <Box width='100%' height='180px' >
                <Cover width='100%' height='100%' source={{ 
                    uri:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg' 
                }}>
                    <Box 
                    width='100%' 
                    justify='center' 
                    align='center' 
                    hasPadding
                    background={`${colors.black}70`}
                    >
                        <Title color='light' bold>{title}</Title>
                        <Spacer/>
                        <Text color='light'>{description}</Text>
                    </Box>
                </Cover>
            </Box>
        </Tochable>
    )
}

export default Category