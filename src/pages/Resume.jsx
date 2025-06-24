import SkillRow from "@/components/SkillRows";
import ResBox from "@/components/ResBox";
import "../styles/Resume.css"
import { motion } from "framer-motion";


export default function() {
    
    return (
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
            <ResBox />
            <h1 className="section-title">Proficiencies</h1>
            <SkillRow ></SkillRow>
            <div className="others-box">
                <p>In addition to those listed above, I also have experience using:</p>
                <ul>
                    <li>REST APIs</li>
                    <li>Expressjs</li>
                    <li>Postman</li>
                    <li>Insomnia</li>
                    <li>Framer Motion</li>
                </ul>
            </div>
        </motion.div>
        </>
    )
}