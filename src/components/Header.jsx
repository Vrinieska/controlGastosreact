import { ManageBudget } from './ManageBudget'
import { NewBudget } from './NewBudget'

export const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {

  return (
    <header>
        <h1>Planificador de gastos</h1>
        { isValidBudget ? (
         <ManageBudget expenses={expenses} budget={budget} />
         ) : (
         <NewBudget 
         budget= {budget}
         setBudget={setBudget}
         setIsValidBudget = {setIsValidBudget}
        />)}
        
    </header>
  )
}
 