"use-client";
import React,{useState}from "react";

const App = ()=>{
      
  //var a = 10 ;
  let[a , newa] = useState(40)
  
  // function abc(){
  //   console.log("hello")
  // }
  return (
    <>
    <h1>New Page Welcome</h1>
    <h1>{a}</h1>

    <button onClick={()=>{
      newa(++a) // or newa(a+1)
      // abc()  implemented a function 
    }}> Update</button>
    </>

  );
}

export default App;

// you can only export any one not two functions 