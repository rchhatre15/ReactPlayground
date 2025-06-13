import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getStarted() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setCount(count + 1);
    setAdvice(data.slip.advice);
  }

  useEffect(function () {
    getStarted();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getStarted}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have absorbed <strong>{props.count}</strong> pieces of advice!
    </p>
  );
}
