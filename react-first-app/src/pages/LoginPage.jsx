import { Container, Flex } from '@chakra-ui/react'
import Header from "../components/Header/Header"
import EmailAddress from "../components/Login/EmailAddress"
import Password from '../components/Login/Passvord'

const LoginPage = () => {


    return (
       <>
        <Header/>
        <Container maxW= 'xl'>
            <Flex 
                display= 'flex'
                flexDirection= 'column' 
                gap= '30px'
            > 
                <EmailAddress/>
                <Password/>
            </Flex>
            
        </Container>        
       </>
    )
}

export default LoginPage