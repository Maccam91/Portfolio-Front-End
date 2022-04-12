import "./contact.css"
import Phone from "../img/phone.svg"
import Email from "../img/email.svg"

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Let's talk about your project or just chat</h1>
                    <div className="c-info-item">
                        <img
                        src={Phone}
                        alt=""
                        className="c-icon"
                        ></img>
                    </div>
                    <div className="c-info-item">
                        <img
                        src={Email}
                        alt=""
                        className="c-icon"
                        ></img>
                    </div>
                </div>
                <div className="c-rightt"></div>
            </div>
        </div>
    )
}

export default Contact