import mobile from "../assets/mobile.png";
import "./Result.css";
export default function Result(props){
    return <div className="result">
        <img src={mobile}  className="mobile" />
        <p>You selected {props.rate} out of 5</p>
        <h1 className="thank">Thank You!</h1>
        <p className="msg">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
}