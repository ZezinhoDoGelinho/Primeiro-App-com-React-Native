import React, {useContext, useEffect, useState} from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Title, Text, Buttom, Spacer, Box} from '../../components'

import { useNavigation } from '@react-navigation/native'

import { AppContext } from '../../contexts/app'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const {setUser} = useContext(AppContext)

    const {navigate} = useNavigation()

    const checkLogged = async () => {
        AsyncStorage.clear()
        setLoading(true)
        const loggedUser = await AsyncStorage.getItem("@user" )
        if(loggedUser) {
            setUser(JSON.parse(loggedUser))
            navigate('Feed')
        }else{
            setLoading(false)
        }
    }

    useEffect(() => {
        checkLogged()
    },[])
  return (
    <>
        <StatusBar barStyle='light-content'/>
        <Box hasPadding align='center' background='dark'> 
        <Box justify='center' align='center' >
            <Title color="light" variant='big' bold>
                LOOKAPP
            </Title>
            <Spacer/>
            <Text align='center' spacing='0px 40px'>
                Stay on top of the fashion world and buy your favorite looks.
            </Text>

            {loading && 
            <>
                <Spacer size='40px'/>
                <ActivityIndicator size='large' color='#fff'/>
            </>}
        </Box>

        {!loading && (<Box justify='flex-end' fluid align='center'>
            <Buttom block onPress={() => navigate('Signin')}>
                <Text color='light'>Signin my account</Text>
            </Buttom>
            <Spacer size='20px' />
            <Text underline color='light' onPress={() => navigate('Signup')}>Create new account</Text>
            <Spacer size='70px'/>
        </Box>)}
        </Box>
    </>
    
  );
};

export default Home;
