import mobile from "../assets/mobile.png";
import "./Result.css";
export default function Result(props){
    return <div className="result">
        <img src={mobile} />
        <p className="msg">You selected {props.rate} out of 5</p>
    </div>
}