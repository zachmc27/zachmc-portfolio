import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt, FaNode, FaReact} from "react-icons/fa";
import "../styles/Component-Styles/SkillRows.css"
import { SiPostgresql, SiTypescript } from "react-icons/si";

export default function SkillRow() {
  return (
    <div className="skills">
        <div className="logo-box">
          <FaHtml5 className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">HTML</p>
        </div>
        <div className="logo-box">
          <FaCss3Alt className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">CSS</p>
        </div>
        <div className="logo-box">
          <FaJs className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">JavaScript</p>
        </div>
        <div className="logo-box">
          <FaGithub className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">Github</p>
        </div>
        <div className="logo-box">
          <FaGitAlt className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">Git</p>
        </div>
        <div className="logo-box">
          <FaNode className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">Nodejs</p>
        </div>
        <div className="logo-box">
          <FaReact className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">React</p>
        </div>
        <div className="logo-box hov">
          <SiTypescript className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">TypeScript</p>
        </div>
        <div className="logo-box">
          <SiPostgresql className="logo hov" fill="var(--skills)"/>
          <p className="logo-title">PostgreSQL</p>
        </div>
        
    </div>
  )
}
