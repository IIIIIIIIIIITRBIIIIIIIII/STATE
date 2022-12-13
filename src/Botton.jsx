import React from 'react'
import './App.css';
import { useState } from 'react';
const Botton = () => {
const [showResults, setShowResults] = useState(false)
const onClick = () => setShowResults(true)
const on = () => setShowResults(false)
  return (
    <>
    <div className='botton'>    
    <button onClick={onClick} className='chin'>dessapear</button>
    <button onClick={on} className='chin'>apear</button>
   </div>
    </>
  )

  }
 
  

export default Botton