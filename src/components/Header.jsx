import { Container, Flex, Heading, Spacer, Box } from "@chakra-ui/react"
import Navbar from "./Navbar.jsx"
import "../styles/Header.css"


export default function Header() {
    return (
    <>
    <Box className="bg" position="fixed" top="0" left="0" width="100%" zIndex="1000" bg="rgba(0, 0, 0, 0.1)">
    <Flex as="nav" align='center' padding='1.5rem' >
        <Heading justify="flex-start" position="absolute" left="8%">Zmc</Heading>
        <Spacer />
        <Navbar ></Navbar>
        <Spacer />
    </Flex> 
    </Box>
   </>

    )
    
}