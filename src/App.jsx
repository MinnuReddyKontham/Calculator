import styles from "./App.module.css";
import ButtonsAvail from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  // Initialize calVal as an empty string
  const [calVal, setCalVal] = useState("");

  // Define the onButtonClick function to handle button clicks
  const onButtonClick = (buttonText) => {
    // Update the calVal state based on button click (you might want to implement more logic here)
    if(buttonText=="C"){
      setCalVal("");

    }
    else if(buttonText=="="){
      const result=eval(calVal);//EVAL IS A FUNCTION WHICH AUTOMATICALLY PERFORMS ALL THE MATHEMATICAL OPERATIONS 
      setCalVal(result);

    }
    else if(buttonText=="<-"){
      const result=calVal.slice(0,-1);//prints from o to -2,excluding -1 ,meanns last value gone
      setCalVal(result);
    }
    else{
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsAvail onButtonClick={onButtonClick}></ButtonsAvail>
    </div>
  );
}

export default App;
