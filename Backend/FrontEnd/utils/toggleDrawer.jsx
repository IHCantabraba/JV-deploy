import { useState } from 'react'

export const toggleDrawer = () => {
  const [open, setOpen] = useState(false)
  const drawerOpen = () => {
    setOpen(true)
  }
  /* close sidebar function */
  const drawerClose = () => {
    setOpen(false)
  }
}
