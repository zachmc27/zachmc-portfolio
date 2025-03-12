import { Box } from "@chakra-ui/react"
import "../styles/Home.css"

export default function Home() {

    return(
        <>
        <div className="welcome-screen">
            <div className="position">
                <h2 className="sub-txt">Hello, I'm</h2>
                <h1 className="main-txt">Zach</h1>
                <h1 className="main-txt">McGregor</h1>
            <h2 className="sub-txt badge">Full Stack Developer</h2>
            </div>
            <div className="social-bubble bub1">G</div>
            <div className="social-bubble bub2">L</div>
            <div className="social-bubble bub3">T</div>
        </div>
        <div className="about-section">
            <div className="vert"></div>
            <h1 className="about-header">About Me</h1>
            <div className="about-content">
            <div className="headshot"></div>
            <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis similique sed consectetur rem iusto dolores? Aspernatur incidunt, itaque odit dolores corrupti iusto? Dolorum laboriosam eos optio aliquid 
                suscipit magnam, neque officiis natus molestias. Id excepturi iste ea placeat aliquam corporis velit porro, reprehenderit similique laboriosam, dignissimos, commodi possimus quis eligendi!
            </p>
            <br />
            <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis similique sed consectetur rem iusto dolores? Aspernatur incidunt, itaque odit dolores corrupti iusto? Dolorum laboriosam eos optio aliquid 
                suscipit magnam, neque officiis natus molestias. Id excepturi iste ea placeat aliquam corporis velit porro, reprehenderit similique laboriosam, dignissimos, commodi possimus quis eligendi!
            </p>
            <br />
            <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis similique sed consectetur rem iusto dolores? Aspernatur incidunt, itaque odit dolores corrupti iusto? Dolorum laboriosam eos optio aliquid 
                suscipit magnam, neque officiis natus molestias. Id excepturi iste ea placeat aliquam corporis velit porro, reprehenderit similique laboriosam, dignissimos, commodi possimus quis eligendi!
            </p>

            </div>
        </div>
        </>
    )
}