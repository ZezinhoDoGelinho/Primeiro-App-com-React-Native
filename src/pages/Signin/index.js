import React, { useState, useContext } from 'react';
import { StatusBar } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Title, Text, Buttom, Spacer, Box, Input} from '../../components'
import { useNavigation } from '@react-navigation/native'

import { AppContext } from '../../contexts/app';

const SingIn = () => {
  const { navigate } = useNavigation()
  const { setUser: setUserContext } = useContext(AppContext)

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const requestLogin = async () => {
    try{
      const { data: users } = await api.get('/users', {
        params: {
          email: user.email?.toLocaleLowerCase(),
          password: user.password,
        },
      }) 

      const [loggedUser] = users

      if(!loggedUser){
        return false
      }

      //STORE IN DEVICE
      await AsyncStorage.setItem("@user", JSON.stringify(loggedUser))

      //PUT USER IN CONTEXT
      setUserContext(loggedUser)

      //GO TO FEED
      navigate('Feed')
    }catch(err){
      console.log(err.message)
    }
  }

 
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <Box background='light' justify='center' align='center' hasPadding> 
        <Title bold variant='big'>LOOKUPP</Title>
        <Spacer size='50px'/>
        <Title >Signin my account.</Title>

        <Spacer size='50px'/>
        <Input 
        placeholder='E-mail' 
        value={user.email} 
        onChangeText={(email) => setUser({...user, email,})}/>
        <Spacer/>
        <Input 
        secureTextEntry 
        placeholder='Password' 
        value={user.password} 
        onChangeText={(password) => setUser({...user, password,})}/>
        <Spacer size='50px'/>

        <Buttom block onPress={() => requestLogin()}>
          <Text color='light'>Signin my account</Text>
        </Buttom>

        <Spacer size='20px' />

        <Text underline onPress={() => navigate('Signup')}>Create new account</Text>
          
      </Box>
    </>
  );
};

export default SingIn;
