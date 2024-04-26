import React from "react";
import { Box, Text, Title, Cover, Tochable, Spacer } from "..";

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../../styles/theme.json'

const Post = ({post}) => {
    return (
        <Box hasPadding fluid>
            <Box row align='center'>
                <Cover width='40px' height='40px' circle
                image="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg"
                />
                <Box spacing='0px 0px 0px 10px'>
                    <Text bold color='dark'>Paulo vitor</Text>
                    <Text variant='small'>2mins ago</Text>
                </Box>
                <Tochable height='30px' width='50px' align='center'>
                    <Icon name='options' size={15} color={colors.muted}/>
                </Tochable>
            </Box>

            <Cover 
            image={post?.cover}
            width='100%'
            height='190px'
            spacing='10px 0px'
            radius='10px'
            />
            <Box row fluid align='center'>
                <Box row fluid align='center'>
                    {Array.from(Array(3))?.map(item => (
                    <Cover
                    circle
                    width='30px'
                    height='30px'
                    border={`1px solid ${colors.light}`}
                    spacing='0px -15px 0px 0px' //"-15px" para deixar uma por cima da outra
                    image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gupy.io%2Fblog%2Fteste-de-perfil&psig=AOvVaw2tHn_XWf72C-toPv95GDVu&ust=1712619390181000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICH78WisYUDFQAAAAAdAAAAABAE'></Cover>))}
                    <Text variant='small' spacing='0px 20px'>Liked by 10,098</Text>
                </Box>
                <Box row justify='flex-end'>
                    <Tochable width='24px' spacing='0px 15px 0px 0px' >
                        <Icon name='heart' size={24} color={colors.danger}/>
                    </Tochable>

                    <Tochable width='24px' spacing='0px 15px 0px 0px'>
                        <Icon name='bubble' size={24} color={colors.muted}/>
                    </Tochable>

                    <Tochable width='24px'>
                        <Icon name='share' size={24} color={colors.muted}/>
                    </Tochable>
                </Box>
            </Box>
            <Spacer/>

            <Text color='dark' small>Legenda da postagem na rede social</Text>
        </Box>
    )
}

export default Post