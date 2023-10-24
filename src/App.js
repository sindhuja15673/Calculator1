import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [display, setDisplay] = useState(0);
  const [currentOperand, setCurrentOperand] = useState('')
  const [operator, setOperator] = useState('');

  const handleOperandClick =(digit)=>{
    if(display==='0'|| operator){
      setDisplay(digit);
    }
    else{
      setDisplay(Number(display+digit));
    }
  }

  const handleOperatorClick =(selectedOperator) =>{
    if(!operator){
      setCurrentOperand(display);
      setOperator(selectedOperator);
    }
  }

  const handleEqualClick = ()=>{
    console.log(`${currentOperand} ${operator} ${display}`);
    
    setDisplay(String(eval(`${currentOperand} ${operator} ${display}`)));
    setCurrentOperand('');
    setOperator('');
  }
  return (
    <div className='cal'>
    <div className='background-image'></div>
    <div className='calculator'>Calculator
      <div className='display'>{display}</div>
      <div className='buttons'>
        {
          [7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'=','/'].map(item =>{
            return <button key={item}
            onClick={()=>{
              if (typeof item === 'number'){
                handleOperandClick(String(item));
              }
              else if(item === '='){
                handleEqualClick();
              }
              else{
                handleOperatorClick(item);
              }
            }}
            >{item}</button>
            
          })
        }
        <button onClick={()=>{setDisplay('0'); setCurrentOperand('')}}>AC</button>
      </div>
      
    </div>
    </div>
  );
}

export default App;
