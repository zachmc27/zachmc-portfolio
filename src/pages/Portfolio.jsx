import Card from "@/components/Card"
import projects from "@/data/projects"
import Grid from "@/components/Grid"

export default function Portfolio() {

    return(
        <>
        <div className="background-img"></div>
        <div className="section">
        <h1 className="section-title">The Accolades of my Journey</h1>
        <div className="info-text-box">
            <p>Welcome to my portfolio! The projects found here are the stepping stones I've taken to improve as a developer each day.</p>
            <br />
            <br />
            <br />
            <p className="faded"> Select a project to dive into further detail. </p>
        </div>
        <Grid></Grid>
        </div>
        </>
    )
}