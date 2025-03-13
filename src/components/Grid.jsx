import Card from "./Card.jsx"
import "../styles/Component-Styles/Grid.css"
import { Flex } from "@chakra-ui/react"
import projects from "@/data/projects.js"




export default function Grid() {

  

  return (
    <Flex className="card-container" justify="center" wrap="wrap" shrink="10" mb="200px">
        {projects.map( (project) => {
          
          return <Card 
          title={project.title} 
          image ={project.image}
          repo={project.repo}  
          deployed={project.deployed} 
          key={project.id}></Card>
        })}
        
        {/* <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
    </Flex>
  )
}
