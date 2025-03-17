import dnd from "../../assets/images/d&d-dice.jpg"
import forecast from "../../assets/images/forecast.jpg"
import cityscape from "../../assets/images/cityscape.jpg"
import keyboards from '../../assets/images/keyboards.jpg'
import payroll from "../../assets/images/payroll.jpg"
import aizach from "../../assets/images/aizach.jpg"

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
        title: "Weather Forecast",
        deployed: "https://weather-forecast-09.onrender.com",
        repo: "https://github.com/zachmc27/09-weather-app",
        image: forecast,
        type: "Full Stack",
        desc: `This project show cases the point in my journey where I am getting the hang of API calls and backend developement.
        The weather app was the 9th project in my education journey and one of the biggest challenges I had faced yet. Though I had starter code to work with,
        having to sift through code to learn how the application was supposed to work was a good challenge.`
    },
    {
        id: 3,
        title: "Employee Database Manager",
        deployed: "https://drive.google.com/file/d/1UTK8lSaHxcNdzLuJqy-N9EqfvMlYpPBN/view",
        repo: "https://github.com/zachmc27/10-employee-database",
        image: cityscape,
        type: "Back End",
        desc: `A backend application that showcases my experience in working with databases and implementing it into code. In this project I worked with TypeScript and PostgreSQL.`
    },
    {
        id: 4,
        title: "Blog",
        deployed: "https://zachmc27.github.io/04-challenge-blog/",
        repo: "https://github.com/zachmc27/04-challenge-blog",
        image: keyboards,
        type: "Front End",
        desc: `Despite having used starter code, this application had proved challenging in having to read through code to learn how it works and then implement what is needed, 
        which I believe is a skill separate from just coding from scratch. This project showcases my experience with utilizing localstorage in javascript and creating a light/dark mode button on my own.`
    },
    {
        id: 5,
        title: "Payroll Tracker",
        deployed: "https://zachmc27.github.io/03-chal-payroll-tracker/",
        repo: "https://github.com/zachmc27/03-chal-payroll-tracker",
        image: payroll,
        type: "Front End",
        desc: "The oldest project listed here, this application demonstrates my ability to work with the JavaScript language."
    },
    {
        id: 6,
        title: "Portfolio",
        deployed: "",
        repo: "https://github.com/zachmc27/zachmc-portfolio",
        image: aizach,
        type: "Front End",
        desc: `This very website! Although it may seem silly to include the very website you are reading this on, it has been my 
        most intensive project yet that I've built from the ground up. With less than two weeks to work, this project is my first bout using
        React, a React library, and animating websites. It's safe to say I did not sleep much during this time frame. `
    }
]

export default projects;