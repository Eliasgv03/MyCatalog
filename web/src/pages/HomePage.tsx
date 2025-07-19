import { Typography, Container } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Página de Inicio
      </Typography>
      <Typography variant="body1">
        ¡Bienvenido a MyCatalog! Este es el contenido de la página principal.
      </Typography>
    </Container>
  );
};

export default HomePage;
