import styles from "../css/About.module.css"
import League from "../assets/league.png"
import Valorant from "../assets/valorant.jpg"
import React from "../assets/react.png"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import CS2 from "../assets/cs2.png"

function About() {
    return (
        <div className={styles["about-content"]}>
            <div className={styles["text-wrapper"]}>
                <h1>
                    About<span className={styles["highlight"]}>Me</span>
                </h1>
                <p>
                    Hey! I’m someone who loves gaming. I usually play 
                    League of Legends, Valorant or CS2. 
                    I really enjoy hanging out with friends, listening 
                    to music and watch movies/series.
                </p>
                <p> I’m also really interested in IT and I see myself 
                    building a career in programming, hopefully working 
                    with React, HTML and CSS. I’m excited to grow in the 
                    tech world and exploring design is another area 
                    I’d love to dive into.
                </p>
            </div>
            <div className={styles["right-content"]}>
                <img src={League} alt="League of Legends" className={styles["Leagueoflegends"]}/>
                <img src={Valorant} alt="Valorant" className={styles["Valorant"]}/>
                <img src={CS2} alt="Counter-Strike 2" className={styles["CS2"]}/>
                <img src={React} alt="React"  className={styles["React"]}/>
                <img src={HTML} alt="HTML" className={styles["HTML"]}/>
                <img src={CSS} alt="CSS" className={styles["CSS"]}/>
            </div>
        </div>
    )
}

export default About;