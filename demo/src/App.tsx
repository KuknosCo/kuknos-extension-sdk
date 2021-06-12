import React from 'react';
import { changeTrust , curveEncrypt } from 'kuknos-browser-intent-sdk'

function App() { 

  const test = async ()=>{
    /* changeTrust('MOBILE10' , "add")
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    }); */

    curveEncrypt("{test: 'matin'}" , 'GDBJKTLROLNYFEZA64STTG3JHM5W5IKGXU7NIG4CPDG2F3BFK25HGS6B')
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
