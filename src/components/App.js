import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState("App light")
  const [text, setText] = useState ("Light Mode")

let switchAppClass
let newText

      if (appClass === "App light") {
        switchAppClass = "App dark"
        newText = "Dark Mode"
      } 
      else {switchAppClass = "App light"
            newText = "Light Mode"}
  
  

      
  function handleAppClass(){
      setAppClass(switchAppClass)
      setText(newText)
    }
    
    
return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleAppClass}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
