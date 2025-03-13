import "../styles/Component-Styles/ResBox.css"
import { Tooltip } from "@/components/ui/tooltip";
import { FaRegFile } from "react-icons/fa";

export default function ResumeBox() {
  return (
    <div className="download-box">
                <p className="faded">For my full resume, click this file icon!</p>
                <Tooltip showArrow content="Zach McGregor's Resume">
                    <div className="file-box">
                        <FaRegFile className="file-icon" />
                    </div>
                </Tooltip>
            </div>
  )
}
