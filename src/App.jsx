import { useState } from 'react'

function App() {
  let [input1, setinput1] = useState("")
  let [input2, setinput2] = useState("")
  let [buttonFix, setbuttonFix] =useState(true)
  let [err, seterr] = useState("")
  let [namber, setnamber] = useState(1)
  let [change, setchange] = useState(5)
  let [show, setshow] = useState(true)
 

  let handlechange = (e)=>{
      setinput1(e.target.value);
  }
  let handleClick1 = ()=>{
    if(!input1){
      seterr("Plase Your Value")
    }else if((input1 - 12 == 0  ? false:!(input1 - 12))){
      seterr("Plase (1 - 10) Your Namber")
    }else{
      seterr("")
      setbuttonFix(false)
      setnamber(namber + 1)
    }
  
    // 
  }
  let handlechange2 = (e)=>{
    setinput2(e.target.value);
    
  }
  let handleClick2 = ()=>{
    if(!input2){
      seterr("Plase Your Value")
    }else if((input2 - 12 == 0  ? false:!(input2 - 12))){
      seterr("Plase (1 - 10) Your Namber")
    }else{
      console.log(input2);
      if(input1 == input2){
        seterr("player 2 winner")
        setshow(false)
      }else{
        seterr("Not March")
      }
      if(change > 1){
        setchange(--change)
      }else{
        seterr("Game is Over")
        setshow(false)
      }
    }
  }
  return (
    <>
       <h2>Player {namber} is play</h2>
       {
          buttonFix 
        ?
          <>
          <input onChange={handlechange} type='password'/>
          <button onClick={handleClick1}>Player 1</button>
          <h3>{err}</h3>
          </>
        :
          <>
          {
            show &&(
              <>
                <h2>Chance : {change}</h2>
                <input onChange={handlechange2} type='password'/>
                <button onClick={handleClick2}>Player 2</button>
              </>
            )
          }
            
          <h3>{err}</h3>
          </>
        }
    </>
  )
}

export default App
