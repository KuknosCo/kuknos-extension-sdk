import React from 'react';
import { changeTrust , curveDecrypt, curveEncrypt } from 'kuknos-browser-intent-sdk'

function App() { 

  const test = async ()=>{
    /* changeTrust('MOBILE10' , "add")
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    }); */

   /*  curveEncrypt("{test: 'matin'}" , 'GDKXBS372NZXAOPJIVF3ODCCHKAALOFRMUPXD7FXGY2VXVEXXJF37QYQ')
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    }); */

    curveDecrypt("JZ9ni3cAOHJ+YfANYtokSEkyF1IZyrygKRPFQ49SoTZnCN6gjCkk1cRSlseoqLiqn2p49GGRea6F/5e7wpxzo6k=")
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
