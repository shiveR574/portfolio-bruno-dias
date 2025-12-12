import "../css/Projects.css"
import Flashscore from "../assets/siteflashscore.png"


function Projects(){
    return (
        <div className="projects-content">
            <div className="left-content">
                <div className="img-wrapper">
                    <img src={Flashscore} alt="previewFlashscore" className="siteFlashscore"/>
                </div>
            </div>
            <div className="right-content">
                <div className="text-wrapper">
                    <p>
                        I intended to do a "Flashscore like" website 
                        to try out some API's and try out how to properly
                        use some API's and get some requests from them.
                    </p>
                    <p>
                        Unfortunately there weren't much free API's available
                        so I didn't extend much into it. Still have to fix
                        the login/register page and maybe attach a database from
                        mySQL to it to save users data.
                    </p>
                </div>
                <button className="button-project" onClick={()=> window.open("https://github.com/shiveR574/flashscore", "_blank")}>
                    Click me to access the coding of "Flashscore"
                </button>
            </div>
        </div>
    )
}

export default Projects;