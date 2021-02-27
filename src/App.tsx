import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

/*export type CounterValueType = 0 | 1 | 2 | 3 | 4 | 5 ;*/

function App() {
  let [value, setValue] = useState<number>(0)
  let increment = () => {
    setValue( value + 1)
  }
  let reset = () => {
    setValue( 0)
  }

  return (
    <div className="App">
    <Counter
        value={value}
        increment={increment}
        reset={reset}
    />

    </div>
  );
}

export default App;
