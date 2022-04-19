import React from 'react'

export const Message = ({children, typeOfColor}) => {
  return (
    <div className={`alerta ${typeOfColor}`}>
        {children}
    </div>
  )
}
