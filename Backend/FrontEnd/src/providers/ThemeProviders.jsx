import { createContext, useState } from 'react'
import React from 'react'
/* crear contexto para el tema de la app */

export const ThemeContext = createContext()
/* utilizar  el proveedor para disponibilizar en la app el estado y el cambio de estado  */
const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(
    localStorage.getItem('light') === 'false' ? false : true
  )
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
