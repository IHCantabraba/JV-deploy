import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../providers/ThemeProviders'
import ChangeTheme from '../ChangeTheme/ChangeTheme'
import SideBacComp from '../SideBarComp/SideBarComp'
import ChangeAvatarIcon from '../ChangeAvatarIcon/ChangeAvatarIcon'

export default function NavBar() {
  const { light } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  /* open sidebar function */
  const drawerOpen = () => {
    setOpen(true)
  }
  /* close sidebar function */
  const drawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar
            style={{
              backgroundColor: `var(--ihc-toolbar-${
                light ? 'light' : 'dark'
              }-mode)`,
              justifyContent: 'space-between'
            }}
          >
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={drawerOpen}
              style={{
                color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`
              }}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography
              variant='h6'
              componente='div'
              style={{
                color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`
              }}
            >
              Jabato Veloz
            </Typography>
            <ChangeAvatarIcon />
            <ChangeTheme
              style={{
                color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <SideBacComp
        state={open}
        setState={setOpen}
        drawerClose={drawerClose}
      ></SideBacComp>
    </>
  )
}
/* {
                sessionStorage.getItem('user')
                  ? setUserImg(
                      JSON.parse(sessionStorage.getItem('user')).user.img
                    )
                  : { userImg }
              } */
