import {Expense} from './Expense'

export const ListOfExpenses = ({expenses}) => {

  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Expenses' : 'You dont have expenses'}</h2>
        {expenses.map( el => (
            <Expense 
             key ={el.id}
             expense = {el}
            />
        ))}
    </div>
  )
}
