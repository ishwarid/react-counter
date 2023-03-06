import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  // const [isActive,setIsActive] = useState(false)
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
    // console.log("timer1", timer);
  };

  const handleStop = () => {
    clearTimeout(timer);
    setFlag(true);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1000);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={count !== 0 && !flag ? handleStop : handleStart}>
        {count !== 0 && !flag ? "Pause" : "Start"}
      </button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}
