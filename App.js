/*
import React from 'react';
import ReactDOM from 'react';
import './index.css';

function App()
{
     
   
  return(
    <>
    <div><h1><span >Hello sir,</span> <span >{ greeting }</span></h1></div>
    </>,
    document.getElementById('root')
  );
}

 export default App;

import React from "react";
import './App.css'

const SlotM=(props)=>{
  //let x = '😄';
  //let y = '😄';
  //let z = "🎅";

 let x = props.x;
 let y = props.y;
 let z = props.z;

  if((props.x === props.y) && (props.y === props.z))
  {
    return(
      <>
      <div className='slot_inner'>
        <h1> 
          {x} {y} {z} 
          </h1>
          <h1>This is matching.</h1>
          <hr />
      </div>
      </>
    ); 
  }
  else{
    return(
      <>
      <div className='slot_inner'>
        <h1> 
          {x} {y} {z} 
          </h1>
          <h1>This is Not matching.</h1>
          <hr />
      </div>
      </>
    );
  }
};


const App =()=>{
return <>
<h1 className="heading_style">
    🎰 Welcome to <span style={{fontWeight:'bold'}}> Slot Machine game</span> 🎰 </h1> 
    <div className="slotcenter">
    <div className="slotmac">
    <div className="slotmachine"><SlotM x= "😄" y="🫡" z="🎅"/></div>
    <div className="slotmachine"><SlotM x= "🥇" y= "🥇"  z="🥇"/></div>
    <div className="slotmachine"><SlotM x= "👍" y="👌" z="🦋"/></div>
    </div>
    </div>
</>;
};
export default App;
*/

import React from "react";
import { useState } from "react";

const  App = () =>{
  const purple = "#8e44ad";
  const [bg,setBg] = useState(purple);
  const [name,setName]=useState('Click Me');
  const bgChange=()=>{
    //console.log("clicked");
    let newBg = '#34495e';
    setBg(newBg);
    setName("Ouch!! 🫢")
  }
  const bgBack = ()=>{
    setBg(purple);
    setName("Ayyo 😠")
  }


  return (
    <>
    <div style={ {backgroundColor:bg} }>
      <button onMouseOver={bgChange} onClick={bgBack}>{name}</button>
    </div>
    </>
  );
}

export default App;