import React from 'react';
import {signXdr} from 'kuknos-browser-intent-sdk'

function App() { 

  const test = async ()=>{
    /* changeTrust('MOBILE10' , "add")
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    }); */

    signXdr("AAAAABihbCMM8LJW339f3Nf2gRfjT5YOmaS//ql4aNPtWqfQAADDUAB9ezsAAAABAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAt2jqyjHDBPQxR3Aox8md4urbbwvEokxdBiCdixoTJlUAAAAAAAAAAACYloAAAAAAAAAAAA==")
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
