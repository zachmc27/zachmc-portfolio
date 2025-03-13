
import { Tooltip } from "@/components/ui/tooltip"
import "../styles/Component-Styles/Card.css"
import { Link, Box } from "@chakra-ui/react"



export default function Card({ title, repo, deployed, image }) {
  return (
    <Box className="card" bgImg={`url(${image})`} >
      <h1 className="card-title">{title}</h1>
      <Tooltip showArrow content="Repository">
        <Link 
        className="repo" 
        href={repo} 
        bgImg="url(/src/assets/images/code-solid.svg)"
        target="_blank"
        rel="noopener noreferrer" />
      </Tooltip>
      <Tooltip showArrow content="Website">
       <Link 
       className="deployed" 
       href={deployed} 
       bgImg="url(/src/assets/images/globe.svg)"
       target="_blank"
       rel="noopener noreferrer" />
      </Tooltip> 
    </Box>
  )
}
