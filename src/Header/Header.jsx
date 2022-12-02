import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Home } from "../Home/Home"
import { Navbar } from "../Navbar/Navbar"
import "./Header.css"


export const Header = () => {

    return(

        <>

        <div className="mainDiv">

        <div className="fonts">

            

            <div className="IconDiv">
            <i className="fa-sharp fa-solid fa-user"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-person-swimming"></i>
            </div>

            <div id="selected" className="IconDiv">
            <i className="fa-sharp fa-solid fa-person-biking"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-sharp fa-solid fa-heart"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-horse"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-sharp fa-solid fa-shield-halved"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-sharp fa-solid fa-camera-retro"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-sharp fa-solid fa-paperclip"></i>
            </div>

        </div>

        <Navbar />

        <Home /> 

        </div>

        </>
    )
}