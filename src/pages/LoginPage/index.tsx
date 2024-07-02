import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Box sx={{ display: "flex", height: "100vh", padding: "0" }}>
      <Box sx={{ width: "50%", backgroundImage: "url(./Hogwarts-login.jpg)", backgroundSize: "cover" }}>

      </Box>
      <Box sx={{ width: "50%", backgroundColor: "#A6955A", }}>
        <Container sx={{ width: "50%", display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem" }}>
          <Typography variant="h3" fontWeight={700} sx={{ color: "#031C29" }} >
            Faça login na sua conta
          </Typography>
          <TextField label="E-mail" type="email" />
          <TextField label="Senha" type="password" />
          <Button sx={{
            color: "#A6955A", background: "#031C29", "&:hover": {
              backgroundColor: "#053543",
            },
          }}
            type="submit">
            Fazer Login
          </Button>
        </Container>
      </Box>
    </Box>
  )
}