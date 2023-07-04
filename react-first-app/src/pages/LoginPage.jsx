import { Container, Flex, Img } from '@chakra-ui/react'
import Header from "../components/Header/Header"
import EmailAddress from "../components/Login/EmailAddress"
import Password from '../components/Login/Passvord'
import Monster from '../assets/Login/image 56.svg'

const LoginPage = () => {

    const Monstr = 
     <img src= {Monster} alt="Img" />

    return (
       <>
        <Header/>
        <Container maxW= '4xl'>
            <Flex 
                display= 'flex'
                alignItems= 'center'                
            >
                <Container maxW= 'xs'>
                        {Monstr}
                    </Container>
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
            </Flex>
             
         </Container>     
        </>
        
            
    )
}

export default LoginPage