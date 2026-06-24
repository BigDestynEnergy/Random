import js from "../assets/javascript.svg"
import css from "../assets/css.svg"

import html from "../assets/filetype-html.svg"
import py from "../assets/filetype-py.svg"
import tsx from "../assets/filetype-tsx.svg"
import "../styles/web.css"

export default function Web(){

    const skills = [
       
        {name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: js},
        {name: "TypeScript", link: "https://www.typescriptlang.org/", icon: tsx},
        {name: "Python", link: "https://www.python.org/", icon: py},
         {name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: html},
        {name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: css},
    ]
    return(
        <section className="web">
            <h3 style={{color: "#38bdf8"}}>I use these languages by the way</h3>

            <div className="skills">
                {skills.map((skill, index) => {
                    return(
                        <a 
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill" key={index}>
                            <img src={skill.icon} alt={skill.name} />
                            <span>{skill.name}</span>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}