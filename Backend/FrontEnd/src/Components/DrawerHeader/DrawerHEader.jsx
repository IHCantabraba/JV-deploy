/* custom div component */
import { styled } from '@mui/material'
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))
