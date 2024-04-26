import React from "react";
import { View, StatusBar } from "react-native";
import {Title, Box, Tochable} from '../../components'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from "../../styles/theme.json";
import { useNavigation } from '@react-navigation/native'

//View é para limitar os componentes onde o usuario possa ver

const Header = ({title = 'Explore', right = null, goBack = false}) => {
    const navigation = useNavigation()
    return (
        <View 
            style={{
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: `${colors.muted}80`,
                backgroundColor: colors.light,
            }}
        >
            <StatusBar barStyle='dark-content'/>
            <View 
                style={{ 
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Tochable 
                    width='70px'
                    height='70px'
                    hasPadding
                    onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}
                    ><Icon name={!goBack ? 'menu' : 'arrow-left'} size={20}/>
                </Tochable>
                <Box justify='center' align='center'>
                    <Title>{title}</Title>
                </Box>
                
                {right ? right() : <Tochable hasPadding width='70px' height='70px'></Tochable>}
            </View>
        </View>
    )
}

export default Header