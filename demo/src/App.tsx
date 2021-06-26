import KuknosIntent from 'kuknos-extension-sdk'
function App() { 

  const submit = async ()=>{
    
    KuknosIntent.getAccountPublicKey()
    .then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
      
    });

  }
  
  return (
    <div className="App"> 
      <button onClick={()=>{submit()}}>kuknos-extension-sdk</button>
    </div>
  );
}

export default App;
