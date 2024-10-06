import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import dayjs from 'dayjs';

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario de registro enviado');
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateBirthDate = (date) => {
    const today = dayjs().startOf('day');
    const selectedDate = dayjs(date);
    const minAgeDate = today.subtract(18, 'year');
    return selectedDate.isBefore(minAgeDate);
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
        display: 'flex',           // Usar flexbox
        justifyContent: 'center',  // Centrar horizontalmente
        alignItems: 'center',      // Centrar verticalmente
        minHeight: '100vh'         // Asegurar que ocupa toda la altura
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',            // Asegurar que el Box ocupe todo el ancho
        }}
      >
        <Typography variant="h5" sx={{ color: '#00BFFF', textAlign: 'center' }}>
          Crear una cuenta nueva
        </Typography>
        <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
          ¿Ya estás registrado? Inicia sesión <a href="/login">aquí</a>.
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
          <TextField
            label="Nombre completo"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Correo electrónico"
            variant="outlined"
            type="email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={password !== '' && !validatePassword(password)}
            helperText={
              password !== '' && !validatePassword(password) 
                ? 'Debe contener al menos 8 caracteres, una mayúscula, un número y un símbolo.' 
                : ''
            }
          />
          <TextField
            label="Fecha de nacimiento"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            error={birthDate !== '' && !validateBirthDate(birthDate)}
            helperText={
              birthDate !== '' && !validateBirthDate(birthDate) 
                ? 'Debes ser mayor de 18 años y no seleccionar la fecha actual.' 
                : ''
            }
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
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUpForm;
