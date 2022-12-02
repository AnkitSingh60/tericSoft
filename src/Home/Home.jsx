import "./Home.css";
import { Card } from "antd";
import {useSelector} from "react-redux";

export const Home = () => {
    const data = useSelector((state)=>state)
    console.log('data:', data)
    
  return (
    <>
      <div className="homeDiv">
        <p>Highlights</p>
        <hr className="hrLine" />

        <div className="box">
        <div className="cardd">
            <div className="imgDiv">
                <img className="img" src="https://c1.wallpaperflare.com/preview/539/737/158/bicycle-bmx-sports-spectacular.jpg" alt="ex" />
            </div>
            <div className="infoDiv">
                <p>title</p>
                <p>time</p>
            </div>
            <div className="btn">
                <button className="button">HEATS</button>
                <button className="button">HIGHLIGHTS</button>
            </div>

        </div>
      </div>
      </div>
    </>
  );
};
