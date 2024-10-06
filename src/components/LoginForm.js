// src/components/LoginForm.js
import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        padding: '20px', 
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto', // Centrar horizontalmente
        paddingY: '20px', // Espaciado arriba y abajo
        paddingX: '20px', // Espaciado izquierda y derecha
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%', // Asegura que el Box ocupe todo el ancho
        }}
      >
        <Typography variant="h4" sx={{ color: '#00BFFF' }}>
          Bienvenidos a Properlink
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Inicia sesión para continuar
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button 
            variant="contained"  
            type="submit" 
            fullWidth 
            sx={{ 
              marginTop: 2,  
              backgroundColor: '#535353' 
            }}
          >
            Acceder
          </Button>
          <Button
            variant="outlined"
            color="grey"
            fullWidth
            sx={{ 
              marginTop: 2, 
              border: 0 
            }}
            onClick={() => console.log('Cancelar')}
          >
            Cancelar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
