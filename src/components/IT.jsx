
import gear from "../assets/gear-fill.svg"
import mc from "../assets/microsoft.svg"
import google from "../assets/google.svg"


export default function It(){

    const addedSkills = [
        {name: "Information Technology", link: "https://sochetech.org/", icon: gear},
        {name: "Google Tools", link: "https://google.com/", icon: google},
        {name: "Microsoft Package", link: "https://microsoft.com/", icon: mc},
    ]
    return(
        <section className="frameworks">
            <h3 style={{color: "#38bdf8"}}>Some acquired professional skills:</h3>

            <div className="skills">
                {addedSkills.map((skill, index) => {
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