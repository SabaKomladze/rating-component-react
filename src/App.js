import "./App.css";
import Result from "./components/Result";
import Rate from "./components/Rate";
import { useState } from "react";
function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();
  return (
    <div className="app">
      {submit ? (
        <Result  rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </div>
  );
}

export default App;
