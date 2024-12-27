import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../services/context/auth'
import { TextField, Button, Container, Typography, Box } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../services/store'
import { loginCheck } from '../../services/slices/loginslice'

export const Login = () => {
  const { setAppUser } = useContext(AuthContext)
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state)=> state.login)
  const [loginaction, setLoginValues] = useState({
    username: '',
    password: '',
  })
  useEffect(() => {
    if (selector.user != null) {
      setAppUser(selector.user)
    }
  }, [selector.user, setAppUser])
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(loginCheck(loginaction))
  }

  const handleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Container component="main" maxWidth="lg" sx={{height:"78vh"}}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Giriş Yap
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Kullanıcı Adı"
            name="username"
            autoComplete="username"
            autoFocus
            value={loginaction.username}
            onChange={handleChanged}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Şifre"
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginaction.password}
            onChange={handleChanged}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Giriş Yap
          </Button>
        </Box>
        
      </Box>
    </Container>
  )
}