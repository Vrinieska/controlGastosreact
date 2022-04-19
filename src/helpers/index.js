export const generateId = () => {
  const random = Math.random(36).toString(36).substring(2)
  const date = Date.now().toString(36)
  return random + date
}

export const resetDate = (fecha) => {
  const newDate = new Date(fecha)
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }
  return newDate.toLocaleDateString("es-ES", options)
}
