import React , {useState} from 'react'
import { Message } from './Message'

export const NewBudget = ({
  budget,
  setBudget,
  setIsValidBudget,
}) => {
    
  // Defino mi state 
  const [message, setMessage] = useState('')


    const HandleBudget = (e: { preventDefault: () => void }) => {
      e.preventDefault()

      if(!(budget) || (budget <= 0)){
          setMessage("Presupuesto No válido")
          return 
      } 

       setMessage("")
       setIsValidBudget(true)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={HandleBudget} className="formulario" >
            <div className="campo">
             <label>Definir Presupuesto</label>
             <input 
               className='nuevo-presupuesto'
               type="number"
               placeholder="Añade tu presupuesto"
               value={budget}
               onChange= { (e) => setBudget(Number(e.target.value))}
             />
             <input type="submit" value="Añadir"/>
             { message && (<Message typeOfColor="error">{message}</Message>)} 
            </div>

        </form>
    </div>
  )
}
