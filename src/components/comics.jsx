import fine from "../Images/fine.jpg"
import mc from "../Images/mclean.jpg"
import "./comics.css"
import tera from "../Images/tera.jpg"
import kevin from "../Images/kevin.webp"
export default function ComicPanel(){

    const comics = [
        {name: "Fine Wine",
             bio: "Following a drought, a local wine brewer embarks on a journey to appease the rain god to bring forth rain but his journey proves perilous.", 
             link: "culturalcomics.ink", 
             image: fine, status: true},
        {name: "The Insignificants",
             bio: "A man finds himself entangled in a mysterious supernatural event where everyone around him has forgotten him.", 
             link: "culturalcomics.ink/app/comic/20", image: mc, status: true},
             {bio: "Following the death of her superhero best friend, a grieving teen devises a plan to replicate her friends origin story so she can gain powers and ennact revenge on the perpetrators", 
                name: "Teraspeed", link: "culturalcomics.ink", status: false, image: tera
             }
    ]

    return(
        <section className="comics">
            <h3 style={{color: "#38bdf8"}}>Did i mention i also write comic books?</h3>
            <p>I am a comic book author, i write comics, create characters</p>
             <p> and design the overall world, characters and setting.</p>

            <div className="comic-panels"> 
                {comics.map((comic, index) => {
                    const href = `https://${comic.link}`
                    return(
                        <div className="card" key={index}>
                            <img src={comic.image} alt="" className="comic-image" />
                            <h2>{comic.name}</h2>
                            <span>Synopsis:</span>
                            <span>{comic.bio}</span>
                            <a 
                            className="comic-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={comic.status ? "Read Comic Book Now" : "Catch up on other comics"}
                            href={href}>{comic.status ? "Read Now" : "Release date TBA"}</a>
                        </div>
                    )
                })}
            </div>
            <h2 style={{color: "#38bdf8", margin: "10px"}}>Safe to say i am really cool</h2>
            <img src={kevin} alt="" className="kevin"/>
            <span>Okay, I love you bye 😘</span>
        </section>
    )
}