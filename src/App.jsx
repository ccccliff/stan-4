import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { subtract, add } from "./redux/modules/calculator";

function App() {
  const [inputValue,setInputValue] = useState(0)
  const dispatch = useDispatch()
  const value = useSelector((state)=>state.calculator.number)
  
  const handleAdd = () => {
    dispatch(add(Number(inputValue)))
  }
  const handleSubtract = () =>{
    dispatch(subtract(Number(inputValue)))
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} /> 만큼을 
        <button onClick={handleAdd}>더할게요</button> <button onClick={handleSubtract}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default App;
