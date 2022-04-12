import "./about.css"
import Logo from "../img/mcdev3.svg"

const About = () => {
return (
    
    <div className="a">
        <div className="a-left">
            <div className="a-card-bg"></div>
            <div className="a-card">
                <img 
                src={Logo}
                alt=""
                className="a-img"/>
            </div>
        </div>
        <div className="a-right"></div>
    </div>
    
)
};

export default About