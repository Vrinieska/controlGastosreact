import React, {useState, useEffect} from 'react'
import {Message} from './Message'
import CerrarBtn from '../assets/img/cerrar.svg'

export const Modal = ({
    setModal, 
    animarModal,
    setAnimarModal,
    saveMyExpense,
    expenseEdit,
}) => {

const [name, setName] = useState('')   
const [qty, setQty] = useState(0)
const [category, setCategory] = useState('')
const [message, setMessage] = useState('')


useEffect(() => {
  if(Object.keys(expenseEdit).length > 0)
  {
      setName(expenseEdit.name)
      setQty(expenseEdit.qty)
      setCategory(expenseEdit.category)
  }
}, [])


const hideModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
         setModal(false)
    },100)
}

const handleSubmitForm = (e) => {
   e.preventDefault()
   if([name,qty,category].includes('')){
       setMessage("Todos los campos deben ser llenados")
       
       setTimeout(() => {
           setMessage(false)
       }, 3000)
       return
   }

   saveMyExpense({name, qty, category})
}


  return (  
       <div className="modal">
           <div className="cerrar-modal">
               <img src={CerrarBtn} alt="cerrar Modal"
                    onClick={hideModal}
               ></img>
           </div>


           <form  onSubmit={handleSubmitForm} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
               <legend>Nuevo Gasto</legend>
               {message && <Message typeOfColor="error">{message}</Message>}
               <div className='campo'>
                   <label htmlFor='categoria'>Nombre del Gasto</label>
                   <input 
                   id="name"
                   type="text"
                   placeholder='Añade el nombre del gasto'
                   value={name}
                   onChange={e => setName(e.target.value)}
                   />
               </div>
                <div className='campo'>
                   <label htmlFor='categoria'>Cantidad</label>
                   <input 
                   id="cantidad"
                   type="number"
                   placeholder='Añade la cantidad del gasto ej. 30'
                   value={qty}
                   onChange={e => setQty(Number(e.target.value))}
                   />
               </div>

               <div className='campo'>
                   <label  htmlFor='categoria'>Categoría</label>
                   <select id="categoria" 
                           value={category}
                           onChange={e => setCategory(e.target.value)} 
                   >

                    <option value=""> ---- Seleccione ----</option>
                    <option value="comida">Comida</option>
                    <option value="gastofijo">Gastos Fijos</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="recreacion">Recreación</option>
                    <option value="salud">Salud</option>
                    <option value="hannah">Hannah</option>
                    <option value="louisa">Louisa</option>
                   </select>
               </div>

               <input type="submit" value="Añadir Gasto" ></input>
            
           </form>

  </div>
  )
}
