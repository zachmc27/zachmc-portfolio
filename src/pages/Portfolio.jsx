import Card from "@/components/Card"
import projects from "@/data/projects"
import Grid from "@/components/Grid"
import "../styles/Portfolio.css"
import { motion } from "framer-motion"

export default function Portfolio() {

    return(
        <>
        <div className="background-img"></div>
        <motion.div 
        className="section"
        initial={{
            opacity: "0%",
            filter: "blur(3px)",
            y: 50
        }}
        animate={{
            opacity: '100%',
            filter: 'blur(0px)',
            y: 0
        }}
        transition={{
            duration: 1,
            y: { type: 'spring', bounce: 0.5},
            filter: { ease: 'easeOut'}
     
     
        }}
        >
        <h1 className="section-title">The Accolades of my Journey</h1>
        <div className="info-text-box">
            <p>Welcome to my portfolio! The projects found here are the stepping stones I've taken to improve as a developer each day.</p>
            <br />
            <br />
            <br />
            <p className="faded"> Select the <span className="b highlight">i</span> on a project to dive into further detail. </p>
        </div>
        <Grid></Grid>
        </motion.div>
        </>
    )
}