import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterWithSettings from "./CounterWithSettings";


function App() {
  const [value, setValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [error, setError] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(false)
  const increment = () => {
    setValue( value + 1)
   
  }
  const reset = () => {
    setValue( 0)
  }


  return (
    <div className="App">
    
    <CounterWithSettings
        value={value}
        increment={increment}
        reset={reset}
        setValue={setValue}
        setMaxValue={setMaxValue}
        setError={setError}
        disabled={disabled}
        setDisabled={setDisabled}
        error={error}
    />
<Counter
        value={value}
        increment={increment}
        reset={reset}
        maxValue={maxValue}
        error={error}
    />
    </div>
  );
}

export default App;
