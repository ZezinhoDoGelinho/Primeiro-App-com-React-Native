import React from "react";
import { StretchyScrollView } from 'react-native-stretchy'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Box, Spacer, Text, Title, Tochable, Buttom } from '../../components'

import Picker from "../../components/Picker";
import Header from "../../components/Header";
import { colors } from '../../styles/theme.json'

const Product = () => {
    return(
        <>
            <Header 
                title="Striped Cardigan" 
                goBack
                right={() => (
                    <Tochable width='70px' height='70px' align='center' justify='center'>
                        <Icon name='bag' size={20}/>
                    </Tochable>
                )}
            />
            <StretchyScrollView
              image={{
                uri: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg'
              }}  
              imageOverlay={
                <Box background={`${colors.dark}40`}></Box>
              }
              foreground={
                <Box hasPadding justify='flex-end'>
                    <Title bold color='light' variant='big'>R$300,00</Title>
                </Box>
              }
            >
                <Box hasPadding background='light'>
                    <Text color='black'>Category</Text>

                    <Spacer size='20px'/>
                    <Title color='black'>Collection Spring 2015</Title>

                    <Spacer size='30px'/>
                    <Text color='dark'>Description for product</Text>

                    <Spacer size='30px'/>
                    <Picker 
                        title='Size'
                        options={[
                        {label: 'P', value: 'P'},
                        {label: 'M', value: 'M'},
                        {label: 'G', value: 'G'},
                        {label: 'XG', value: 'XG'}
                        ]}
                        initialValeu='M'
                    />
                    <Spacer size='30px'/>

                    <Buttom block>
                        <Text color='light'>Add to cart</Text>
                    </Buttom>
                </Box>
            </StretchyScrollView>
        </>
        
    )
}

export default Product