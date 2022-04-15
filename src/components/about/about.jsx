import "./about.css"
import Logo from "../img/mcdev3.svg"
import Me from "../img/mes.png"

const About = () => {
return (
    
    <div className="a">
        <div className="a-left">
            <div className="a-card-bg"></div>
            <div className="a-card">
                <img 
                src={Me}
                alt=""
                className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <div className="a-intro">A brief introduction about me.</div>
            <div className="a-desc">Born and raised native Houstonian. <br/> Growing up as an avid gamer I've always loved finding creative solutions to puzzles and problems.<br/>My years in retail management and an early career within the IT field have given me a very good understanding of user’s frustrations and how to break them down into ways I can solve them. <br/>Working in environments like this have taught me a wealth of skills. <br/>Needed to work as a team, lead a team, and to solve issues that could arise at a moment's notice.<br/>What I bring is an empathetic approach to the team where I will actively listen to <br/>the customer / clients / or my co-workers problems to have a better understanding what it is they need from me.
            <br/>Outside of my excellent softskills I have spent the last 6 months taking on the journey of transitioning my career to that of a software engineer.<br/> I bootcamped with <a className="a-link" href="https://generalassemb.ly/">General Assembly</a>  building projects and learning the <span className="skills-bold">Skills shown below.</span>

            </div>
            <div className="a-skills-m"> Skills</div>
            <div className="a-skills">
                <div className="a-skills-wrapper">
                <div className="a-skills-skill">JavaScript</div>
                <div className="a-skills-skill">Python</div>
                <div className="a-skills-skill">Typescript</div>
                <div className="a-skills-skill">Flask</div>
                <div className="a-skills-skill">React</div>
                <div className="a-skills-skill">Django</div>
                <div className="a-skills-skill">Node JS</div>
                <div className="a-skills-skill">SQL</div>
                <div className="a-skills-skill">Mongo</div>
                <div className="a-skills-skill">CSS</div>
                <div className="a-skills-skill">HTML</div>
                </div>
                              
            </div>
        </div>
    </div>
    
)
};

export default About