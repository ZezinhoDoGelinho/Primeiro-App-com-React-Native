import React, {useState, useRef, useEffect} from "react";
import { Box, Text, Title, Spacer, Input, Tochable} from '../'
import SegmentedPicker from "react-native-segmented-picker";

const PaymentForm = ({ onChange= creditCard => {}}) => {
    const pickerRef = useRef(null)

    const [data, setData] =useState({
        holder_name: '',
        number: '',
        valid_date: '',
        cvv: ''
    })

    useEffect(() => {
        onChange(data)
    }, [data])

    return(
        <>
        <SegmentedPicker
            ref={pickerRef}
            onConfirm={(data) => setData({
                ...data,
                valid_date: `${data.month}/${data.year}`
            })}
            options={[
            {
                key: 'month',
                items: [
                { label: 'Jan', value: '01' },
                { label: 'Fev', value: '02' },
                { label: 'Mar', value: '03' },
                { label: 'Abr', value: '04' },
                { label: 'Mai', value: '05' },
                { label: 'jun', value: '06' },
                { label: 'jul', value: '07' },
                { label: 'ago', value: '08' },
                { label: 'set', value: '09' },
                { label: 'out', value: '10' },
                { label: 'nov', value: '11' },
                { label: 'dez', value: '12' }
                ],
            },
            {
                key: 'year',
                items: [
                { label: 'Option 3', value: 'option_3' },
                ],
            },
            ]}
        />
            <Box>
                <Title variant='small'>Select and enter your payment details</Title>
                <Spacer/>
                <Text>By continuing you agree to our Terms</Text>
                <Spacer size='20px'/>
                <Input placeholder="Name"
                value={data.holder_name}
                onChangeText={holder_name => setData({
                    ...data,
                    holder_name,
                })}
                ></Input>
                <Spacer/>
                <Input placeholder="Credit Card Number"
                value={data.number}
                onChangeText={number => setData({
                    ...data,
                    number,
                })}
                ></Input>
                <Spacer/>
                <Tochable  width='100%' onPress={() => pickerRef.current.show()}>
                    <Input pointerEvents="none" editable={false} placeholder="09/2025"></Input>
                </Tochable>
                <Spacer/>
                <Box row>
                    <Box spacing='0px 10px 0px 0px'>
                        <Input placeholder="CVV"
                        value={data.cvv}
                        onChangeText={cvv => setData({
                            ...data,
                            cvv,
                        })}
                        ></Input>
                    </Box>
                    <Box>
                        <Spacer/>
                        <Text variant='small'>3 or 4 digits usually found on the signature strip</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PaymentForm