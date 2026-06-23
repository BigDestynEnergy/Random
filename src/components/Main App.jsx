import des from '../Images/Des.jpg'
import tiktok from "../assets/tiktok.svg"
import instagram from "../assets/instagram.svg"
import twitterx from "../assets/twitter-x.svg"
import facebook from "../assets/facebook.svg"
import bolt from "../assets/lightning-fill.svg"
import chat from "../assets/chat.svg"
import sup from "../assets/whatsapp.svg"
import './Styles.css'

export default function MainApp(){
    const links = [
        {name: "Email", link: "dukedestin34@gmail.com", icon: chat},
        {name: "Facebook", link: "https://www.facebook.com/profile.php?id=61557103982365&mibextid=ZbWKwL", icon: facebook},
        {name: "Instagram", link: "https://www.instagram.com/koma.destyn.adha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: instagram},
        {name: "TikTok", link: "https://www.tiktok.com/@tsogollo?_r=1&_t=ZS-97RpeX1eQdA", icon: tiktok},
        {name: "WhatsApp", link: "https://wa.me/265998833172", icon: sup},
        {name: "Twitter/X", link: "", icon: twitterx},
        {name: "Comics", link: "https://culturalcomics.ink/app/comic/20/", icon: bolt},
    ]
    return(
        <section>
            <header>
                <img src={des} alt="" className='img' />
                <h2>Hey, My name is Destyn</h2>
                <span>I wanted to subscribe for Linktree and display all my links, <br /> but i am a web developer so i made my own</span>
            </header>

            <div className="links">
                <h3>Find me on:</h3>
                <div className="inner-links">
                   {links.map((link, index) => {
    const reference = link.link.includes("@gmail.com")
        ? `mailto:${link.link}`
        : link.link;

    return (
        <a
            href={reference || "#"}
            key={index}
            target={reference ? "_blank" : undefined}
            rel={reference ? "noopener noreferrer" : undefined}
            className={`link ${!reference ? "disabled" : ""}`}
            onClick={(e) => {
                if (!reference) {
                    e.preventDefault();
                    alert("No link available");
                }
            }}
        >
            <img src={link.icon} alt={link.name} />
            <span>{link.name}</span>
        </a>
    );
})}
                </div>
            </div>

            <div className="lower">
                <h2>More coming soon</h2>
            </div>
        </section>
    )
}