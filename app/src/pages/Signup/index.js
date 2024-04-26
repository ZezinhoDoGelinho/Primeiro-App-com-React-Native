import React, {useState, useContext} from 'react';

import {Title, Text, Buttom, Spacer, Box, Input} from '../../components'
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../contexts/app';

import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';

const SingUp = () => {
  const { setUser: setUserContext } = useContext(AppContext)
  const { navigate } = useNavigation()
  const [loading, setLoading] = useState(false)

  const [user,setUser] = useState({
    name: "",
    email: '',
    password: ""
  })

  const requestSignup = async () => {
    try {
      setLoading(true)
      if(user.name?.length === 0 || user.email?.length === 0 || user.password?.length === 0 ){
        return false
      }

      const {data: loggedUser} = await api.post('/users', user)

      if(!loggedUser){
        setLoading(false)
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
          <Title bold>Create new account.</Title>
          <Spacer/>
          <Text>Enter your details below:</Text>

          <Spacer size='50px'/>
          <Input 
          placeholder='Name' 
          editable={!loading}
          value={user.name}
          onChangeText={name => setUser({...user, name,})}
          />
          <Spacer/>
          <Input 
          placeholder='E-mail'
          editable={!loading}
          value={user.email}
          onChangeText={email => setUser({...user, email: email?.toLowerCase(),})}
          />
          <Spacer/>
          <Input 
          secureTextEntry 
          editable={!loading}
          placeholder='Password'
          value={user.password}
          onChangeText={password => setUser({...user, password,})}
          />

          <Spacer size='50px'/>
          {loading && <ActivityIndicator size='large' color='#95afc0'/>}
          {!loading && <>
            <Buttom block onPress={() => requestSignup()}>
                <Text color='light'>Create new account</Text>
            </Buttom>
            <Spacer size='20px' />
            <Text underline onPress={() => navigate('Home')}>Back to Home</Text>
          </>}
      </Box>
    </>
  );
};

export default SingUp;
