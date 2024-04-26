import React from "react";
import { Box, ScrollViewL, Text, Tochable } from '../'

import { colors } from '../../styles/theme.json'

const Tabs = ({ tabs = [], active = '', onChange = tab => {} }) => {

    const totalTabs = tabs?.length 
    const activeTabStyle = {
        borderBottomWidth: 3,
        borderColor: '#eb001b',
    }
    
    return(
        <Box
        row
        height='70px'
        background='light'
        >
        {tabs?.map(tab => (
            <Tochable 
                onPress={() => onChange(tab.value)}
                hasPadding
                style={[
                    {
                        minWidth: `${100 / totalTabs}%`,
                        alignItems: 'center'
                    },
                    active === tab.value ? activeTabStyle : {},
                ]}
            >
                <Text color={active === tab.value ? 'primary' : undefined}>
                    {tab.label}
                </Text>
            </Tochable>
        ))}
        </Box>
    )
}
export default Tabs