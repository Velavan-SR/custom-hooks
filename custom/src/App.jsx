import React from "react";
import './App.css';
import useStorage from "./useStorage";

function App() {
  const [local, setlocal] = useStorage("local", "");
  const [session, setsession] = useStorage("session", "", sessionStorage);

  return (
    <>

      <div>
        <label>Local Storage:</label>
        <input
          type="text"
          value={local}
          onChange={(e) => setlocal(e.target.value)}
        />
      </div>
      
      <div>
        <label>Session Storage:</label>
        <input
          type="text"
          value={session}
          onChange={(e) => setsession(e.target.value)}
        />
      </div>
    
    </>
  );
}

export default App;