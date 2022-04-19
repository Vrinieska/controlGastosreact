import React from 'react'
import { resetDate } from '../helpers'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'

import 'react-swipeable-list/dist/styles.css'
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoGastoFijo from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoRecreacion from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoHannah from '../assets/img/icono_gastos.svg'



const dicctionarioIconos ={
  ahorro: IconoAhorro,
  comida: IconoComida,
  gastofijo: IconoGastoFijo,
  recreacion: IconoRecreacion,
  salud: IconoSalud,
  hannah: IconoHannah,
  louisa: IconoHannah
}

export const Expense = ({expense, setExpenseEdit}) => {
    const {category, name,qty, id,fecha} = expense

    const leadingActions = () => (
       <LeadingActions>
          <SwipeAction onClick={() => setExpenseEdit(expense)}>
           Editar
          </SwipeAction>
       </LeadingActions>
    )
          
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction onClick={() => console.log('Eliminar')}>
         Eliminar
        </SwipeAction>
      </TrailingActions>
      
    )

  return (
    <SwipeableList>
      <SwipeableListItem
       leadingActions={leadingActions()}
       trailingActions={trailingActions()}
      >
      <div className='gasto sombra'>
        <div className='contenido-gasto'>
          <img  
            src={dicctionarioIconos[category]}
            alt="icono gasto"
          />
         <div className='descripcion-gasto'>
             <p className='categoria'>{category}</p>
             <p className='nombre-gasto'>{name}</p>
             <p className='fecha-gasto'>Agregado el: {''} 
             <span>{resetDate(fecha)}</span>
             </p>
         </div>
        </div>
          <p className='cantidad-gasto'>${qty}</p>
     </div>
      </SwipeableListItem>
    </SwipeableList>
    

  )
}
