import React from 'react'
import "../styles/Component-Styles/Footer.css"
import { Link, Flex} from '@chakra-ui/react'

export default function Footer() {
  return (
    <div className='footer-box'>
        <div className='footer-text'>
            <p className='faded'>By Zach McGregor &copy; 2025 </p>
            
        </div>
        <Flex className='footer-links' gap="3" mt="10px">
            <Link 
            className='footer-bubble' 
            bgImg="url(/src/assets/images/github-brands.svg)" 
            href="https://github.com/zachmc27"
            target="_blank" 
            rel="noopener noreferrer"/>
            <Link 
            className='footer-bubble' 
            bgImg="url(/src/assets/images/linkedin-brands.svg)" 
            href="https://www.linkedin.com/in/zach-mcgregor-57a766355/"
            target="_blank"
            rel="noopener noreferrer"
            />
        </Flex>
    </div>
  )
}
