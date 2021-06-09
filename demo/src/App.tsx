import React from 'react';
import { changeTrust } from 'kuknos-browser-intent-sdk'

function App() {

  const test = async ()=>{
    changeTrust('MOBILE10' , "add")
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    });
      
  }

  return (
    <div className="App" onClick={()=>{test()}}> 
      kuknos browser intent sdk
    </div>
  );
}

export default App;
