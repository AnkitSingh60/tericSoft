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
            <i className="fa-sharp fa-solid fa-star"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-horse"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-person-swimming"></i>
            </div>

            <div id="selected" className="IconDiv">
            <i className="fa-sharp fa-solid fa-person-biking"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-horse"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-horse"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-horse"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-horse"></i>
            </div>

            <div className="IconDiv">
            <i className="fa-solid fa-ship"></i>
            </div>

        </div>

        <Navbar />

        <Home /> 

        </div>

        </>
    )
}