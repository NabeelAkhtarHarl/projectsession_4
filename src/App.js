 //import React  from 'react';
 import React, {useState, Fragment} from 'react';
 import './App.css';

 function App (){
  const [name,setName]=useState("Nabeel");
 const [count,setCount]=useState(1);
 const [decrement,setDecrement]=useState(1);
 const [isMorning,setMorning]=useState(false);
 const handalclick =()=>{
   setCount(count+1);
   setName("Umer");
   setMorning(true);
 }
 const handalclick2 =()=>{
  setDecrement(decrement-1);

 }
 return(
   <div className="App-header"> 
           <h1>Day Time={isMorning ? 'Morning' : 'Night' }</h1>
          <h1>Yor Name is{name}</h1>
          <h1 >Your number is {count}</h1>
          <h1>your decrement number is{decrement}</h1>

          <button type='button' onClick={handalclick}>Chang Name and number</button>
          <button type="button" onClick={handalclick2}>decrement number</button>
   </div>
 )

 }

export default App;
 
