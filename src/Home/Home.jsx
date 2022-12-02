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
        {
                data.data.map((item)=>{
                    return (
                        <div className="cardd">
            
                        <div className="imgDiv">
                            <img className="img" src={item.image} alt="ex" />
                        </div>
                        <div className="infoDiv">
                            <p className="boldInfo">{item.title}</p>
                            <p className="boldInfo">{item.time}</p>
                        </div>
                        <div className="btn">
                            <button className="button">HEATS</button>
                            <button className="button">HIGHLIGHTS</button>
                        </div>
            
                    </div>
                    )
                })
            }
      </div>
      </div>
    </>
  );
};
