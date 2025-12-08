import styles from "../css/About.module.css"
import League from "../assets/league.png"
import Valorant from "../assets/valorant.jpg"
import CS2 from "../assets/cs2.png"

function About() {
    return (
        <div className={styles["about-content"]}>
            <div className={styles["text-wrapper"]}>
                <h1>
                    About<span className={styles["highlight"]}>Me</span>
                </h1>
                <p>
                    "[paragraph content]"
                </p>
            </div>
            <div className={styles["right-content"]}>
                <img src={League} alt="League of Legends" className={styles["Leagueoflegends"]}/>
                <img src={Valorant} alt="Valorant" className={styles["Valorant"]}/>
                <img src={CS2} alt="Counter-Strike 2" className={styles["CS2"]}/>
            </div>
        </div>
    )
}

export default About;