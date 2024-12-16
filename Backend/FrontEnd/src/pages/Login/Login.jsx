import {
  Container,
  Paper,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid2,
  Link,
  createTheme,
  ThemeProvider
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React, { useContext, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './Login.css'
import { AvatarIconContext } from '../../providers/AvatarIconProvider'
const BaseUrl = import.meta.env.VITE_BaseName
const Login = () => {
  console.log('me re-renderizo')
  const [username, setUsername] = useState('')
  const [userPassword, setUserpassword] = useState('')
  const { AvatarIcon, setAvatarIcon } = useContext(AvatarIconContext)

  const handleUser = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => setUserpassword(e.target.value)

  const handleSubmit = async (event) => {
    console.log('handling submit')
    console.log(`usewr name is: ${username}`)
    console.log(userPassword)
    event.preventDefault()

    try {
      const fetchResults = await fetch(`http://localhost:3000/api/auth/login`, {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({ nombre: username, password: userPassword })
      })
      /* comprobar si existe el usuario  */
      if (fetchResults.ok) {
        const data = await fetchResults.json()
        sessionStorage.setItem('user', JSON.stringify(data))
        setAvatarIcon(JSON.parse(sessionStorage.getItem('user')).user.img)
        console.log(`Avatar icon is: ${AvatarIcon}`)
      }
    } catch (error) {
      console.log(`An error ocurred ${error}`)
    }
  }
  return (
    <Container maxWidth='xs'>
      <Paper
        elevation={10}
        sx={{ marginTop: 20, padding: 2, alignSelf: 'center' }}
      >
        <Avatar
          sx={{
            mx: 'auto',
            bgcolor: 'green',
            textAlign: 'center',
            mb: 1
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
          Sing In
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 1 }}
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <TextField
            placeholder='Nombre Usuario'
            value={username}
            name='usernane'
            onChange={handleUser}
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            autoComplete='on'
          />
          <TextField
            placeholder='Contraseña'
            value={userPassword}
            onChange={handlePassword}
            fullWidth
            required
            type='password'
            name='password'
            autoComplete='on'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ mt: 1, bgcolor: 'green' }}
          >
            Sign in
          </Button>
        </Box>
        <Grid2 container justifyContent='space-between' sx={{ mt: 1 }}>
          <Grid2 item>
            <Link component={RouterLink} to='/forgot'>
              Forgot password?
            </Link>
          </Grid2>
          <Grid2 item>
            <Link component={RouterLink} to='/register'>
              Sign Up
            </Link>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  )
}

export default Login
