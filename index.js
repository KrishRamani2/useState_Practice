import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*<div>
    <h1>Ramani Technical Netflix Pick</h1>
    <p>List of 5 Best Series </p>
    <ol>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>My Holo Love</li>
      <li>My first-2 love</li>
      <li>Mr Robot</li>
    </ol>
  </div>,
  document.getElementById('root'));
  

const fname = 'Krish';
const lname = 'Ramani'

  ReactDOM.render(
    <>
    <h1>My Name is {fname + ' ' +lname}</h1>
    <p>My Lucky Number is {Math.random()}</p>
    </>,
    document.getElementById('root')

ReactDOM.render(
    <>
    <h1>Hello,My Name is Krish</h1>
    </>
  ); 
 
  let curDate = new Date(2023,10,22,15);
  curDate=curDate.getHours();
 const cssStyle = {};
 let greeting = '';
  if(curDate>=1 && curDate<12)
  {
    greeting = "Good Morning";
    cssStyle.color = "Blue";
  }
  else if(curDate>=12 && curDate<=19)
  {
    greeting = "Good Afternoon";
    cssStyle.color = "Yellow";
  }
  else
  {
    greeting = "Good Evening";
    cssStyle.color = "Black";
  }

  ReactDOM.render(
    <>
    <div><h1><span >Hello sir,</span> <span >{ greeting }</span></h1></div>
    </>,
    document.getElementById('root')
  );
   
   /*ReactDOM.render(

    <Heading>

    </Heading>,document.getElementById('root')
    
   
    ); 
    ReactDOM.render(
      <>
      
      <App />
      </>,
   document.getElementById('root')
  );
  */
  ReactDOM.render(
    <>
    
    <App />
    </>,
 document.getElementById('root')
);