import { useState } from "react";
import Input from "./input";
import Square from "./square";


function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}
        colorValue={colorValue}
        isDarkText={isDarkText}
      />
    </div>
  );
}

export default App;
