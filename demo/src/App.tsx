import React from 'react';
import {changeTrust , payment} from 'kuknos-browser-intent-sdk'
function App() { 

  const test = async ()=>{
    
    /* console.log(btoa(JSON.stringify({
      data : 'matin',
      type : 'warn',
      location : 'login',
      userAgent: navigator.userAgent
    })));
     */
    //changeTrust('remove' , 'ABPARS' , "GAKARA32VNSMKCSPMDNQXCOMZSDSBRZCQCAJKDH4A4CLCGOIVL7UNZWS" , 10)
    changeTrust('add' , 'ABPARS' , "GAKARA32VNSMKCSPMDNQXCOMZSDSBRZCQCAJKDH4A4CLCGOIVL7UNZWS" , 10)
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
