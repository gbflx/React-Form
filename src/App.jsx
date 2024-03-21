import React from 'react'
import "./App.css"
import Forms from './components/form'
import logo   from"./assets/react.png"


const App = () => {
  return (
    <div className='corpo'> 
    <img src={logo} alt='logo'/>
    <h1 className='title'>React form</h1>
     <Forms nome={"Name"}/>
     <Forms idade={"Idade"}/>
     <Forms email={"E-mail"}/>
    <button>Enviar</button>
    </div>
    
  )
  
}

export default App
