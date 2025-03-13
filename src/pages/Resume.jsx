import SkillRow from "@/components/SkillRows";
import ResBox from "@/components/ResBox";
import "../styles/Resume.css"


export default function() {
    
    return (
        <>
        <div className="background-img"></div>
        <div className="section">
            <ResBox />
            <h1 className="section-title">Proficiencies</h1>
            <SkillRow ></SkillRow>
            <div className="others-box">
                <p>In addition to those listed above, I also have experience using:</p>
                <ul>
                    <li>REST APIs</li>
                    <li>Expressjs</li>
                </ul>
            </div>
        </div>
        </>
    )
}