import { useState } from 'react';
import './App.css';

function App() {
  let db = [
    {
      id: 1,
      mail: "tanay@neog.camp"
    },
    {
      id: 2,
      mail: "tanvi@neog.camp"
    },
    {
      id: 3,
      mail: "akanksha@neog.camp"
    },
    {
      id: 4,
      mail: "parul@neog.camp"
    },
    {
      id: 5,
      mail: "kishan@neog.camp"
    }
  ];

  let[newMail, setNewMail] = useState("");
  let[message, setMessage] = useState("");

  function handleEmailInput(e){
    setNewMail(e.target.value)
  }
 
  function handleSubscribe()
  {
    const isMailPresent = db.some(({mail}) => mail === newMail);
    setMessage(isMailPresent ? "Already Subscribed" : "Congrats now you are subscribed");
    if(!isMailPresent){
      db= [...db, {id: db.length +1 , mail: newMail}];
    }
}
  return (
    <div className="App">
      <input value={newMail} placeholder='Add Email' onChange={handleEmailInput}/>
      <button onClick={handleSubscribe} >Subscribe</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
