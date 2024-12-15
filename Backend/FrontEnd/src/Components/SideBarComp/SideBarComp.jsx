import { useContext, useState } from 'react'
import { ThemeContext } from '../../providers/ThemeProviders'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { DrawerHeader } from '../DrawerHeader/DrawerHEader'

export default function SideBacComp({ state, drawerClose }) {
  const { light } = useContext(ThemeContext)
  return (
    <>
      <Drawer anchor='left' open={state}>
        <DrawerHeader
          style={{
            backgroundColor: `var(--ihc-drawer-${light ? 'light' : 'dark'})`
          }}
        >
          <IconButton onClick={drawerClose}>
            <ChevronLeftIcon
              style={{
                color: `var(--ihc-${light ? 'light' : 'dark'}-mode-Chevron)`
              }}
            ></ChevronLeftIcon>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          style={{
            backgroundColor: `var(--ihc-drawer-${light ? 'light' : 'dark'})`,
            height: '100vh'
          }}
        >
          {['Home', 'About', 'Contact Us', 'Support', 'Login'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={`/${text.toLowerCase()}`}>
                <ListItemText
                  primary={text}
                  style={{
                    color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`
                  }}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}
