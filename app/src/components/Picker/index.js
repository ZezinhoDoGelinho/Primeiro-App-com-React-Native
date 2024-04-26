import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Box, Text, Tochable, Spacer } from "..";
import { colors } from '../../styles/theme.json'

const Picker = ({ options, initialValeu, title}) => {
    const [ selected, setSelected ] = useState('')

    useEffect(() => {
        setSelected(initialValeu)
    },[])

    return(
        <>
            <Text bold color='dark'>
                {title}
            </Text>
            <Spacer />
            <Box row fluid >
                {options?.map(opt => (
                    <Tochable 
                    onPress={() => {setSelected(opt?.value)}}
                    style={[
                        styles.base, 
                        styles[selected === opt?.value ? 'checked' : 'uncheckd']]}>
                        <Text style={selected === opt?.value ? styles.textChecked : undefined}>{opt?.label}</Text>
                    </Tochable>
                ))}
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    base: {
        maxWidth: 45,
        height: 45,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uncheckd: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.muted,
    },
    checked: {
        backgroundColor: colors.primary
    },
    textChecked: {
        color: colors.light
    }
})

export default Picker