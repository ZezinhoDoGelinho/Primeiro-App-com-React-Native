import React from "react";
import Header from "../../components/Header";
import { Box, Text, Tochable } from '../../components'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import PoductList from "../../components/Product/list";

const Category = () => {
    return(
        <>
            <Header 
                title="Categoria X" 
                right={() => (
                    <Tochable width='70px' height='70px' align='center' justify='center'>
                        <Icon name='bag' size={20}/>
                    </Tochable>
                )}
            />
            <PoductList/>
        </>
        
    )
}

export default Category