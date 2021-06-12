import React from 'react';
import {getAccountBalances, getAccountSetting} from 'kuknos-browser-intent-sdk'

function App() { 

  const test = async ()=>{
    getAccountSetting("GDKXBS372NZXAOPJIVF3ODCCHKAALOFRMUPXD7FXGY2VXVEXXJF37QYQ")
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
