import des from '../Images/Des.jpg'
import tiktok from "../assets/tiktok.svg"
import instagram from "../assets/instagram.svg"
import twitterx from "../assets/twitter-x.svg"
import facebook from "../assets/facebook.svg"

import chat from "../assets/chat.svg"
import sup from "../assets/whatsapp.svg"
import './Styles.css'
import Projects from './projects'
import { useState } from 'react'
import ComicPanel from './comics'
import onlyfans from '../Images/of.svg'
import Web from './Web'
import Frameworks from './frameworks'

export default function MainApp(){
    const links = [
        {name: "WhatsApp ads & collabs", link: "https://wa.me/265881700140", icon: sup},
        {name: "Email", link: "dukedestin34@gmail.com", icon: chat},
        {name: "TikTok", link: "https://www.tiktok.com/@tsogollo?_r=1&_t=ZS-97RpeX1eQdA", icon: tiktok},
        
        {name: "Facebook", link: "https://www.facebook.com/profile.php?id=61557103982365&mibextid=ZbWKwL", icon: facebook},
        {name: "Instagram | Personal", link: "https://www.instagram.com/koma.destyn.adha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: instagram},
        {name: "Instagram | Content", link: "https://www.instagram.com/ankoloakumalawi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: instagram},
        
        {name: "Twitter/X", link: "", icon: twitterx},
        {name: "OnlyFans", link: "", icon: onlyfans}
    ];

    const [modal, setModal] = useState(false)


    return(
        <section>
            <header>
                <img src={des} alt="Des" onClick={()=>setModal(true)} className='img' />
                <h2>Hey, My name is Destyn</h2>
                <span>I wanted to subscribe for Linktree and display all my links,</span>
                
                <span>but i am a web developer so i made my own</span>
                <i style={{color: "#ffffff6e"}}>Disclaimer: This is lowkey a portfolio (oo0ps!)</i>
            {modal && (
                <div className="modal">
                    <span 
                    onClick={()=>setModal(false)}
                    className="close">close</span>
                    <img src={des} alt="Des" />
                </div>
            )}
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
                if (link.name === "Twitter/X") {
                    e.preventDefault();
                    alert("No link available");
                } else if(link.name === "OnlyFans"){
                    e.preventDefault();
                    alert("You dirty animal! Nothing to see here");
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

            <Projects/>
            <Web/>
            <Frameworks/>
            <ComicPanel/>
        </section>
    )
}