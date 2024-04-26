import React from "react"
import { ScrollViewL } from "../" 
import Order from "./index"

const OrderList = () => {
    return(
        <ScrollViewL fluid hasPadding>
            {Array.from(Array(20))?.map(item => (
                <Order/>
            ))}
        </ScrollViewL>
    )
}

export default OrderList