import React, { useState } from "react";
import Header from "../../components/Header";

import { ScrollViewL, Spacer, Box, Title, Text, Buttom } from "../../components";

import Tabs from "../../components/Tabs";
import Product from "../../components/Product";
import PaymentForm from "../../components/Forms/payment";

import CongratsModal from "../../components/Modals/congrats";

const Cart = () => {
    const [showCongrats, setShowCongrats] = useState(false)
    const [tab, setTab ] = useState('')
    return (
        <>
            {showCongrats && <CongratsModal/>}


            <Header title="Cart" goBack/>
            <Tabs 
            tabs={[
                { label: 'Cart', value: 'Cart'},
                { label: 'Payment', value: 'Payment'},
            ]}
            active={tab || setTab('Cart')}
            onChange={value => setTab(value)}
            />
            <ScrollViewL hasPadding background='light'>
                <Spacer size='20px'/>
                <Title variant='small'>Order number is 123456</Title>
                <Spacer size='20px'/>

                {tab === 'Cart' && (
                <>
                    {Array.from(Array(3))?.map(item => (
                        <Product 
                            cover='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_11.jpg'
                            title='Nasus Lunar'
                            brand='Seilá'
                            price='R$38,00'
                            selected
                        />
                    ))}
                    <Spacer size='30px'/>
                    <Box row width='100%' height='30px' justify='space-between'>
                        <Text color='dark'>Order:</Text>
                        <Text color='dark'>R$400,00</Text>
                    </Box>
                    <Box row width='100%' height='30px' justify='space-between'>
                        <Text color='dark' >Discount:</Text>
                        <Text color='success'>-R$44,00</Text>
                    </Box>
                    <Box row width='100%' height='30px' justify='space-between'>
                        <Text color='dark'>Delivery:</Text>
                        <Text color='dark'>R$10,00</Text>
                    </Box>
                    <Box row width='100%' height='30px' justify='space-between'>
                        <Text color='dark' bold>Total Order:</Text>
                        <Text color='dark' bold>R$400,00</Text>
                    </Box>
                    <Spacer size='30px'/>
                    <Buttom block onPress={() => setTab('Payment')}>
                        <Text color='light'>Place Order</Text>
                    </Buttom>
                </>
                )}
                {tab === 'Payment' && (
                <>
                    <Spacer size='20px'/>
                    <Box row width='100%' justify='space-between' style={{
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderColor: '#95afc080',
                    }}>
                        <Text color='dark' bold>Shipping address</Text>
                        <Text color='danger'>Change</Text>
                    </Box>
                    <Spacer />
                    <Text color='dark'>Description</Text>
                    <Spacer size='30px'/>
                    <Box row width='100%' justify='space-between' style={{
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderColor: '#95afc080',
                    }}>
                        <Text color='dark' bold>Delivery details</Text>
                        <Text color='danger'>Change</Text>
                    </Box>
                    <Spacer />
                    <Text color='dark'>Standard Delivery</Text>
                    <Text color='dark'>Saturday 27 - Tuesday 30</Text>
                    <Text color='dark'>Cost: R$10</Text>
                    <Spacer size='30px'/>

                    <PaymentForm onChange={(creditCardData) => console.log(creditCardData)}/>

                    <Spacer size='30px'/>
                    <Buttom block onPress={() => setShowCongrats(true)}>
                        <Text color='light'>Confirmation</Text>
                    </Buttom>
                    <Spacer size='50px'/>
                </>)}
            </ScrollViewL>
        </>
    )
}

export default Cart