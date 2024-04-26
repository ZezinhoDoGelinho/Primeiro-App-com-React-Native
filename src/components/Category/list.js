import React from "react"
import { Box, ScrollViewL } from "../" 
import Category from "./index"

const CategoryList = () => {
    return(
        <ScrollViewL fluid style={{
           paddingTop: 20,
           paddingLeft: 20,
           paddingRight: 20, 
        }}>
            {Array.from(Array(20))?.map(item => (
                <Category title={`Category`} description={'description category'}/>
            ))}
        </ScrollViewL>
    )
}

export default CategoryList