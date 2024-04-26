import React from "react";
import Header from "../../components/Header";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Tochable } from '../../components'
import CategoryList from "../../components/Category/list";

const Marketplace = () => {
    return(
        <>
            <Header title='Categories' right={() => (
                <Tochable width='70px' height='70px' align='center' justify='center'>
                    <Icon name='bag' size={20}/>
                </Tochable>
            )}/>
            
            <CategoryList/>
        </>
    )
}

export default Marketplace