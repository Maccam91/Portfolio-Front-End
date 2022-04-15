import "./contact.css"
import Email from "../img/newemail.svg"
import Resume from "../img/resume.svg"

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Contact Info</h1>
                    <div className="c-info-item">
                        <img
                        src={Resume}
                        alt=""
                        className="c-icon"
                        />Resume
                    </div>
                    <div className="c-info-item">
                        <img
                        src={Email}
                        alt=""
                        className="c-icon"
                        />
                        michael.cortezjr@gmail.com
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-right-desc">
                    Let's talk about your project or just chat. I am always up for the challenge and willing to learn or listen.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact