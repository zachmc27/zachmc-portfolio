import dnd from "../../assets/images/d&d-dice.jpg"
import cinematch from "../../assets/images/cinematch.jpeg"
import fetchly from "../../assets/images/fetchly2.jpg"

const projects = [
    {
        id: 1,
        title: "D&D Character Builder",
        deployed: "https://zachmc27.github.io/p01-dd-char-builder/",
        repo: "https://github.com/zachmc27/p01-dd-char-builder",
        image: dnd,
        type: "Front End",
        desc: `My first foray coding in a team environment. This application was built with Javascript, CSS, and HTML.
        We had a two week time period as budding developers to put our imaginations to work and see what would come of it, 
        and I would say the biggest challenge was getting the local storage working correctly. I played a leading role in the development process,
        handling the direction and work flow of the project. 
        `
    },
    {
        id: 2,
        title: "Cinematch",
        deployed: "",
        repo: "https://github.com/zachmc27/media-mate",
        image: cinematch,
        type: "Full Stack",
        desc: `This project showcases my experience utilizing RESTful APIs. I worked in a team of 5 and we used external APIs as well as APIs we built ourselves.
        We implemented a login system with JWT authentication, and a friends system as well where a user can send and recieve friend requests from other users.
        I functioned as a project lead, and gained invaluable experience in project planning, team organizing, ideating, and the overall development cycle.`
    },
    {
        id: 3,
        title: "Fetchly",
        deployed: "",
        repo: "https://github.com/zachmc27/fetchly",
        image: fetchly,
        type: "Full Stack",
        desc: `The biggest project I have lead and created to date, working with the same team as I did for Cinematch. Fetchly implements internally built graphql APIs, JWT Authentication, a NoSQL backend,
        and image uploading capabilities to bring to life a social media experience centered around pets. CI/CD pipelines were also implemented in the development process. The MVP for this project was done in two weeks, and though imperfect, it has served as a major stepping
        stone in the capabilities and pitfalls that come with making scalable full stack applications.`
    }
]

export default projects;