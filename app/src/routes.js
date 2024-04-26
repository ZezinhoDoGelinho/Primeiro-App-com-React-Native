import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors } from './styles/theme.json'
import { Title } from "./components";

import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Feed from "./pages/Feed"
import Marketplace from "./pages/Marketplace";
import Category from "./pages/Marketplace/category";
import Product from "./pages/Marketplace/product";
import Cart from './pages/Cart'
import Orders from "./pages/Orders";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//FUnção vai receber todas nossas config e itens atraves do props
const CustonDrawerComponent = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <Title bold color='light' variant='big' hasPadding>LOOKAPP</Title>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const DrawerComponent = () => {
    return (
      <Drawer.Navigator 
      initialRouteName="Feed" 
      drawerContent={props => <CustonDrawerComponent {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor: colors.light,
        drawerStyle: {
            backgroundColor: '#111'
        }
    }}
      drawerContentOptions={{}}
      >
        <Drawer.Screen options={{
            drawerIcon: ({focused, color}) => (
            <Icon name='people' color={color}/>
            )}} 
            name="Feed" 
            component={Feed} 
        />
        <Drawer.Screen options={{
            drawerIcon: ({focused, color}) => (
            <Icon name='tag' color={color}/>
            )}} 
            name="marketplace" 
            component={Marketplace} 
        />
        <Drawer.Screen options={{
            drawerIcon: ({focused, color}) => (
            <Icon name='basket' color={color}/>
            )}} 
            name="Orders" 
            component={Orders} 
        />
      </Drawer.Navigator>
    );
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown: false,}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown: false,}} name="Signin" component={Signin} />
                <Stack.Screen options={{headerShown: false,}} name="Signup" component={Signup} />
                <Stack.Screen options={{headerShown: false,}} name="Feed" component={DrawerComponent} />
                <Stack.Screen options={{headerShown: false,}} name="Category" component={Category} />
                <Stack.Screen options={{headerShown: false,}} name="Product" component={Product} />
                <Stack.Screen options={{headerShown: false,}} name="Cart" component={Cart} />
                <Stack.Screen options={{headerShown: false,}} name="Orders" component={Orders} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes