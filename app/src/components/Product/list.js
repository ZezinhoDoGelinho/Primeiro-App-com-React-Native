import React from "react"
import { Box, ScrollViewL } from "../" 
import Product from "./index"

const PoductList = () => {
    return(
        <ScrollViewL fluid>
            {Array.from(Array(20))?.map(item => (
                <Product 
                    cover='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_11.jpg'
                    title='Nasus Lunar'
                    brand='Seilá'
                    price='R$38,00'
                />
            ))}
        </ScrollViewL>
    )
}

export default PoductList