import styles from "../css/Home.module.css"
import profilePic from "../assets/npc-face.jpg"
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className={styles["home-content"]}>
            <div className={styles["home-left"]}>
                <div className={styles["text-wrapper"]}>
                    <h1> Hello,</h1>
                    <h1> I'm Bruno Dias.</h1>
                    <h3>FrontEnd Developer specializing in React</h3>
                </div>
                <div className={styles["btn-home"]}>
                <Link to="/projects">
                    <button type="button"> View Projects</button>
                </Link>
                </div>
            </div>

            <div className="home-right">
                <img src={profilePic} alt="Bruno Dias profile" className={styles["profile-image"]}/>
            </div>
        </div>
    )
}

export default Home;