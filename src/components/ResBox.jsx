import "../styles/Component-Styles/ResBox.css"
import { Tooltip } from "@/components/ui/tooltip";
import { Link } from "@chakra-ui/react";
import { FaRegFile } from "react-icons/fa";
import Resume from "../../assets/Resume.pdf"

export default function ResumeBox() {
  return (
    <div className="download-box">
                <p className="faded">For my full resume, click this file icon!</p>
                <Tooltip showArrow content="Zach_McGregor_Resume.pdf">
                    <div className="file-box">
                      <Link href={`${Resume}`} download="Zach_McGregor_Resume.pdf" className="link">
                        <FaRegFile className="file-icon" fill="var(--theme-color)"/>
                      </Link>  
                    </div>
                </Tooltip>
            </div>
  )
}
