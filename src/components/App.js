
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";
import tabs from "./data";

const App = () => {
  
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabs} />
        
    </div>
  )
}

export default App
