import react from "../Images/react.svg"
import word from "../Images/word.svg"

export default function Frameworks(){

    const skills = [
        {name: "React", link: "https://reactjs.org/", icon: react},
        {name: "WordPress", link: "https://wordpress.com/", icon: word},
    ]
    return(
        <section className="frameworks">
            <h3 style={{color: "#38bdf8"}}>Almost forgot these frameworks:</h3>

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