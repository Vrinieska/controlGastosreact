import {useState, useEffect} from 'react'

export const ManageBudget = ({expenses, budget}) => {

  //DEFINO EL STATE DE  MI PROYECTO 
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

 useEffect(() => {
   const totalGastado = expenses.reduce((acc, el) => el.qty + acc,0)
   const totalDisponible = budget - totalGastado 

   console.log('totalDisponible',totalDisponible)
   console.log('tGastado', totalGastado)

   setDisponible(totalDisponible)
   setGastado(totalGastado)
 }, [expenses])

  const resetQty = (qty) => {
    return qty.toLocaleString('en-US',{
      style:'currency',
      currency:'USD'
    })
  }
  
  return (
    <div className= "contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aquí</p>
        </div>

       <div className="contenido-presupuesto">
            <p>
              <span> Budget: </span> 
               {resetQty(budget)} mxn
            </p>
        </div>

        <div className="contenido-presupuesto">
            <p>
              <span> Available: </span> 
               {resetQty(disponible)} mxn
            </p>
        </div>
        <div className="contenido-presupuesto">
            <p>
              <span> Spent: </span> 
              {resetQty(gastado)} mxn
              </p>
        </div>
    </div>
  )
}
