import React , {useState , useEffect} from 'react';
import KuknosIntent from 'kuknos-browser-intent-sdk'
function App() { 

  const submit = async ()=>{
    
    /* console.log(btoa(JSON.stringify({
      data : 'matin',
      type : 'warn',
      location : 'login',
      userAgent: navigator.userAgent
    })));
     */

   


    KuknosIntent.getAccountPublicKey()
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    });

  }

/*   const [test , setTest] = useState('http://localhost:3000');
  useEffect(()=>{
    KuknosIntent.setExtensionUrl(test)
    KuknosIntent.setNetwork('test')
  },[test])
 */

  
  return (
    <div className="App"> 
      <button onClick={()=>{submit()}}>kuknos browser intent sdk</button>
      <button onClick={()=>{KuknosIntent.setNetwork('test')}}>test</button>
      <button onClick={()=>{KuknosIntent.setNetwork('public')}}>public</button>
    </div>
  );
}

export default App;
