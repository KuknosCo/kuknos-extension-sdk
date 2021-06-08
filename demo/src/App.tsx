import React from 'react';
import { getAccountPublicKey , getAccountBalances, createAccount } from 'kuknos-browser-intent-sdk'

function App() {

  const test = async ()=>{
    createAccount('09201334767')
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
