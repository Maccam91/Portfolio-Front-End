import "./intro.css"
import Me from "../img/mes.png"
const Intro = () => {
    return (
        <div className="i">
            
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello World My Name Is</h2>
                    <h2 className="i-name">Michael Cortez</h2>
                    <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Full Stack Devoloper</div>
                        <div className="i-title-item">Active Learner</div>
                        <div className="i-title-item">Graphic Designer</div>
                        <div className="i-title-item">Table Top Gamer</div>
                        <div className="i-title-item">Cat & Dog Dad</div>
                    </div>
                    </div>
                    <div className="i-desc">
                    I am excellent at learning new languages and frameworks<br/> 
                    I excel in the creative aspect of creating front end experiences for users<br/>
                    Whether it's through designing or implementing technology that will make their experience easy and comfortable.
                    </div>
                    </div>
            </div>
            <div className="i-right">
                <div className="i-bg"><img src={Me} alt="me" className="i-img"/></div>
                {/* <img src={Me} alt="me" className="i-img"/> */}
            </div>
        </div>
    )
};

export default Intro