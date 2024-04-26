import React from "react";

import Header from "../../components/Header";
import OrderList from "../../components/Order/list";
import { ScrollViewL } from '../../components'

const Orders = () => {
    return(
        <ScrollViewL>
            <Header title='Orders'/>
            <OrderList/>
        </ScrollViewL>
    )
}

export default Orders