import {  Flex, Spacer, Box } from "@chakra-ui/react"
import Navbar from "./Navbar.jsx"
import "../styles/Header.css"
import Dropdown from "./Menu.jsx"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Header() {

   
        const [width, setWidth] = useState(window.innerWidth);
      
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
      
          window.addEventListener("resize", handleResize);
          
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
    
    const test = true
    return (
    <>
    <Box className="bg" position="fixed" top="0" left="0" width="100%" zIndex="1000" >
    <Flex as="nav" align='center' padding='1.5rem' >
        <Link justify="flex-start" position="absolute" left="8%" className="zmc" to="/">Z.Mc</Link>
        <Spacer />
        {width > 450 ? <Navbar /> : <Dropdown />}
        <Spacer />
    </Flex> 
    </Box>
   </>

    )
    
}