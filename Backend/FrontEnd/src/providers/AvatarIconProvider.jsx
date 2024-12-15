import { createContext, useState } from 'react'
import React from 'react'
/* crear contexto para el tema de la app */

export const AvatarIconContext = createContext()
/* utilizar  el proveedor para disponibilizar en la app el estado y el cambio de estado  */
const AvatarIconProvider = ({ children }) => {
  const [AvatarIcon, setAvatarIcon] = useState(() => {
    const user = sessionStorage.getItem('user')
    return user && user.img ? user.img : 'Prof.png'
  })
  return (
    <AvatarIconContext.Provider value={{ AvatarIcon, setAvatarIcon }}>
      {children}
    </AvatarIconContext.Provider>
  )
}
export default AvatarIconProvider
