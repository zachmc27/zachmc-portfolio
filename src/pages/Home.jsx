import { Image, Link } from "@chakra-ui/react";
import "../styles/Home.css";
import { easeIn, motion } from "framer-motion";


export default function Home() {

    return(
        <>
        {/* header */}
        <div className="welcome-screen">
            <div className="position">
                <motion.h2 
                className="sub-txt"
                initial= {{
                    opacity: "0%",
                    filter: 'blur(10px)',
                    x: 20
                }}
                animate= {{
                    opacity: '100%',
                    filter: 'blur(0px)',
                    x: 0
                }}
                transition={{
                    duration: .5,
                    ease: 'easeOut',
                    delay: .5
                }}
                >Hello, I'm</motion.h2>

                <motion.h1 
                className="main-txt"
                initial= {{
                    opacity: "0%",
                    filter: 'blur(10px)',
                    y: 20
                }}
                animate= {{
                    opacity: '100%',
                    filter: 'blur(0px)',
                    y: 0
                }}
                transition={{
                    duration: .5,
                    ease: 'easeOut'
                }}
                >Zach</motion.h1>

                <motion.h1 
                className="main-txt"
                initial= {{
                    opacity: "0%",
                    filter: 'blur(10px)',
                    y: 20
                }}
                animate= {{
                    opacity: '100%',
                    filter: 'blur(0px)',
                    y: 0
                }}
                transition={{
                    duration: .5,
                    ease: 'easeOut'
                }}
                >McGregor</motion.h1>

            <motion.h2 
            className="badge"
            initial= {{
                opacity: "0%",
                filter: 'blur(10px)',
                x: -20
            }}
            animate= {{
                opacity: '100%',
                filter: 'blur(0px)',
                x: 0
            }}
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
                animate={{
                    rotate: ['0deg','5deg','-15deg', '370deg', '360deg'],
                    scale: [0, .5, .3, 1.2, 1],
                    filter: ["blur(.5px)", 'blur(0px)', 'blur(1px)', 'blur(.2px)', 'blur(0px)' ]

                    
                }}
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
                animate={{
                    rotate: ['0deg','5deg','-15deg', '370deg', '360deg'],
                    scale: [0, .5, .3, 1.2, 1],
                    filter: ["blur(.5px)", 'blur(0px)', 'blur(1px)', 'blur(.2px)', 'blur(0px)' ]

                    
                }}
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
                animate={{
                    rotate: ['0deg','5deg','-15deg', '370deg', '360deg'],
                    scale: [0, .5, .3, 1.2, 1],
                    filter: ["blur(.5px)", 'blur(0px)', 'blur(1px)', 'blur(.2px)', 'blur(0px)' ]

                    
                }}
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
                <Image src="/src/assets/images/headshot.jpg" className="headshot"/>
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
                It looks like you've found your way into my little corner of the internet! Born in 2000, I am a Southern Californian currently based in Austin, TX
                (sorry, Texans). My coding journey began at the very end of my last. When my dreams had slipped out of my reach and I found myself lost in life, a stranger
                that I stumbled across in a local bar decided to reach out a generous hand and show me a new path.  
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
                My first go of learning to code was in early 2023 through an asynchronous udemy course... however that didn't last long when I realized that trying to 
                give directions to a computer, at times, felt like trying to teach a toddler algebra. Early on, I gave up. After living and growing as a person, I gave it another shot
                in late 2024. With the previous frustrations weighing on me, I tried to approach coding with a different mindset. The high I felt when I was able to overcome the obstacles that faced me, was what caused me to fall in love with coding.
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
            >I'm currently enrolled in the <span className="b">UTSA Software Development Bootcamp</span> and am eager to carve out my future in the tech industry. When I'm not coding, I enjoy spending time with my girlfriend, friends, and family. My hobbies include volleyball, video games,
                and exploring new places. If you've made it all the way through, thanks for reading!
            </motion.p>

            </div>
        </div>
        </>
    )
}