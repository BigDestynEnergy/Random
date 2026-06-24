import "./Styles.css"
export default function Projects(){

        const projects = [
        {name: "Abantuverse", link: "abantuverce.vercel.app"},
        {name: "Cafe Maju", link: "cafe-maju.vercel.app"},
        {name: "Destyns FX", link: "destyns-fx.vercel.app"},
        {name: "Ingenious", link: "ingenious-tasker.vercel.app"},
        {name: "Encryptor", link: "emcryptorui.netlify.app"},
    ]

    return(
        <section className="projects">
            <h3>Web projects i made cause i was bored</h3>

            <div className="project-links">
                {projects.map((project, index) =>{
                    const reff = `https://${project.link}`
                    return(
                        <a 
                        key={index}
                        className="project"
                        href={reff}>{project.name}</a>
                    )
                })}
            </div>
        </section>
    )
}