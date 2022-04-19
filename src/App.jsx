import { useState } from 'react'
import { Header } from './components/Header'
import { ListOfExpenses } from './components/ListOfExpenses'
import {Modal} from  './components/Modal'
import { generateId } from './helpers'
import iconNewExpense from './assets/img/nuevo-gasto.svg'



function App() {
//Define my state 
const [budget, setBudget] = useState(0)
const [isValidBudget, setIsValidBudget] = useState(false)
const [modal, setModal] = useState(false)
const [animarModal, setAnimarModal] = useState(false)
const [expenses , setExpenses] = useState([])

const handleNewExpense = () => {
  setModal(true)
  setTimeout(() => {
    setAnimarModal(true)
  }, 500)
}

const saveMyExpense = (expense) =>{
   //TO GENERATE THE ID 
   expense.id = generateId()
   expense.fecha = Date.now()

   setExpenses([...expenses, expense])

   //TO CLOSE THE MODAL AFTER ADD MY EXPENSE 
   setAnimarModal(false)
   setTimeout(() => {
     setModal(false)
   },500)
}



  return (
<div className={ modal ? 'fijar' : null}> 

   <Header
     expenses={expenses}
     budget= {budget}
     setBudget={setBudget}
     isValidBudget = {isValidBudget}
     setIsValidBudget = {setIsValidBudget}
   />
   {isValidBudget && (
    <>
     <main>
      <ListOfExpenses expenses={expenses} />
     </main>
       <div className="nuevo-gasto">
         <img src={iconNewExpense} alt = "icon newExpense" onClick={handleNewExpense}/>
       </div>
    </>
   
   )}

   {modal && <Modal 
                 setModal={setModal}
                 animarModal={animarModal}
                 setAnimarModal={setAnimarModal}
                 saveMyExpense={saveMyExpense}
                />}
   
  </div>
  )
}

export default App
