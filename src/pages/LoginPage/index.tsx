import { auth } from "@/service/firebaseConfig";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function LoginPage() {
  const router = useRouter();
  const [emailLogin, setEmailLogin] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(emailLogin, password);
      const { lastLoginAt, expiresIn, accessToken, email, displayName } =
        response?.user as any;

      const userLoged = {
        name: displayName,
        email: email,
        token: accessToken,
        loginDate: Number(lastLoginAt),
        expirationTime: Number(expiresIn),
      };
      localStorage.setItem("user", JSON.stringify(userLoged));

      router.push("/");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", padding: "0" }}>
      <Box
        sx={{
          width: "50%",
          backgroundImage: "url(./Hogwarts-login.jpg)",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box sx={{ width: "50%", backgroundColor: "#A6955A" }}>
        <Container
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          <Typography variant="h3" fontWeight={700} sx={{ color: "#031C29" }}>
            Faça login na sua conta
          </Typography>
          <TextField
            label="E-mail"
            type="email"
            onChange={(e) => setEmailLogin(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            sx={{
              color: "#A6955A",
              background: "#031C29",
              "&:hover": {
                backgroundColor: "#053543",
              },
            }}
            onClick={handleSignIn}
          >
            Fazer Login
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
