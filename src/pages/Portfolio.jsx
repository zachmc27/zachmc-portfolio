import Card from "@/components/Card"
import projects from "@/assets/projects"
import "../styles/Portfolio.css"
import Grid from "@/components/Grid"

export default function Portfolio() {

    return(
        <div className="portfolio-section">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="info-text">
            <p>Welcome to my portfolio section! Click the tabs to sort between my full stack, front end, and backend works.</p>
            <p>Click on an image to display a brief description about the project. Repository links and deployed links are provided where applicable. </p>
        </div>
        <Grid></Grid>
        </div>
    )
}