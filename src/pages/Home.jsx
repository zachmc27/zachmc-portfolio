import { Image, Link } from "@chakra-ui/react";
import { Link as SiteLink } from "react-router-dom";
import "../styles/Home.css";
import { easeIn, motion } from "framer-motion";
import headshot from "../../assets/images/headshot.jpg"
import OptimizedImage from "../components/OptimizedImage"


export default function Home() {

    return(
        <>
        {/* header */}
        <div className="welcome-screen">
            <div className="position">
                <motion.h2 
                className="sub-txt"
                initial={{
                    opacity: "0%",
                    filter: 'blur(10px)',
                    x: 20
                }}
                whileInView={{
                    opacity: '100%',
                    filter: 'blur(0px)',
                    x: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: .5,
                    ease: 'easeOut',
                    delay: .5
                }}
                >Hello, I'm</motion.h2>

                <motion.h1 
                className="main-txt"
                initial={{
                    opacity: "0%",
                    filter: 'blur(10px)',
                    y: 20
                }}
                whileInView={{
                    opacity: '100%',
                    filter: 'blur(0px)',
                    y: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: .5,
                    ease: 'easeOut'
                }}
                >Zach</motion.h1>

                <motion.h1 
                className="main-txt"
                initial={{
                    opacity: "0%",
                    filter: 'blur(10px)',
                    y: 20
                }}
                whileInView={{
                    opacity: '100%',
                    filter: 'blur(0px)',
                    y: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: .5,
                    ease: 'easeOut'
                }}
                >McGregor</motion.h1>

            <motion.h2 
            className="badge"
            initial={{
                opacity: "0%",
                filter: 'blur(10px)',
                x: -20
            }}
            whileInView={{
                opacity: '100%',
                filter: 'blur(0px)',
                x: 0
            }}
            viewport={{ once: true }}
            transition={{
                duration: .5,
                ease: 'easeOut',
                delay: 1
            }}
            >Full Stack Developer</motion.h2>

            </div>
            {/* bubbles */}
            <motion.div 
                className="social-bubble bub1"
                initial={{
                    rotate:"0deg",
                    scale: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    rotate: ['0deg','5deg','-15deg', '370deg', '360deg'],
                    scale: [0, .5, .3, 1.2, 1],
                    filter: ["blur(.5px)", 'blur(0px)', 'blur(1px)', 'blur(.2px)', 'blur(0px)' ]
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    ease: "circInOut",
                    times: [0, .2, .4, .8, 1],
                    delay: 2
                }}
            >
            <Link 
            className="link"  
            href="https://github.com/zachmc27"
            target="_blank" 
            rel="noopener noreferrer"
            />
            </motion.div>
            <motion.div 
                className="social-bubble bub2"
                initial={{
                    rotate:"0deg",
                    scale: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    rotate: ['0deg','5deg','-15deg', '370deg', '360deg'],
                    scale: [0, .5, .3, 1.2, 1],
                    filter: ["blur(.5px)", 'blur(0px)', 'blur(1px)', 'blur(.2px)', 'blur(0px)' ]
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    ease: "circInOut",
                    times: [0, .2, .4, .8, 1],
                    delay: 2
                }}
            >
                <Link
                className="link"  
                href="https://www.linkedin.com/in/zach-mcgregor-57a766355/"
                target="_blank"
                rel="noopener noreferrer"
                />
            </motion.div>
            <motion.div 
                className="social-bubble bub3"
                initial={{
                    rotate:"0deg",
                    scale: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    rotate: ['0deg','5deg','-15deg', '370deg', '360deg'],
                    scale: [0, .5, .3, 1.2, 1],
                    filter: ["blur(.5px)", 'blur(0px)', 'blur(1px)', 'blur(.2px)', 'blur(0px)' ]
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    ease: "circInOut",
                    times: [0, .2, .4, .8, 1],
                    delay: 2
                }}
            >
                <Link 
                className="link"
                href="https://bsky.app/profile/zmcremiix.bsky.social"
                target="_blank"
                rel="noopener noreferrer" 
                ></Link>
            </motion.div>
            
        </div>
        <div 
        className="about-section"
        >
            <div className="vert-line"></div>

            <motion.h1 
            className="about-header"
            initial={{
                opacity: "0%",
                filter: "blur(3px)",
                y: 50
            }}
            whileInView={{
                opacity: '100%',
                filter: 'blur(0px)',
                y: 0
            }}
            transition={{
                duration: 1,
                y: { type: 'spring', bounce: 0.5},
                filter: { ease: 'easeOut'}
            }}
            >About Me</motion.h1>
            
            <div className="about-content">
                
            <motion.div 
            className="headshot-circle"
            initial={{
                opacity: "0%",
                scale: 0
            }}
            whileInView={{
                opacity: '100%',
                scale: 1
            }}
            transition={{
                duration: 1,
                scale: { type: 'spring', bounce: 0.5},
                filter: { ease: 'easeOut'}
            }}
            >
                <OptimizedImage src={headshot} alt="Zach McGregor headshot" className="headshot" loading="lazy"/>
            </motion.div>
            <motion.p 
            className="about-text"
            initial={{
                opacity: "0%",
                filter: "blur(3px)",
                y: 50
            }}
            whileInView={{
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
                Welcome to my portfolio! Born in 2000, I am a Southern Californian currently based in Austin, TX
                (sorry, Texans). In June 2025, I completed the <span className="b">UTSA Software Development Bootcamp</span>. This course gave me a very comprehensive foundation in
                software development. Teaching me technologies including TypeScript, React, Nodejs, Python and SQL/NoSQL, and development practices like DevOps, Agile, and Object Oriented Programming.
            </motion.p>
            <br />
            <motion.p 
            className="about-text"
            initial={{
                opacity: "0%",
                filter: "blur(3px)",
                y: 50
            }}
            whileInView={{
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
                As an emerging software engineer, the strengths I bring to the practice include leadership and interpersonal skills that I gained through my work in guest experience roles and my hobby of competitive gaming. As a result, I have found success in
                collaborating on Agile teams developing full stack, production ready applications (more info on these projects <SiteLink to="/Portfolio" ><span className="link-text">here</span></SiteLink>). Aside from my involvment in writing code, I contribute to teams through project ideation, wireframing, organizing file architecture, roadmapping agile
                sprints, conducting code reviews, and supporting peers through complex problem solving. 
            </motion.p>
            <br />
            <motion.p 
            className="about-text"
            initial={{
                opacity: "0%",
                filter: "blur(3px)",
                y: 50
            }}
            whileInView={{
                opacity: '100%',
                filter: 'blur(0px)',
                y: 0
            }}
            transition={{
                duration: 1,
                y: { type: 'spring', bounce: 0.5},
                filter: { ease: 'easeOut'}
            }}
            >I am currently transitioning from hospitality to get a full time position as a software developer. Aside from job searching, I continue to hone my existing skills, expand my skillset by learning new tools, and
            deepening my understanding of computer science fundementally. Aside from that, I enjoy competitive Valorant, recreational volleyball, working out, and spending time with friends and loved ones.
            </motion.p>

            </div>
        </div>
        </>
    )
}