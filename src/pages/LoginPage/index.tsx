import { useAuth } from "@/context/AuthContext";
import { auth } from "@/service/firebaseConfig";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

export default function LoginPage() {
  const loggedInUser = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // usado para criar usuarios
  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth);

  // usado pra acessar os dados do usuario
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // usado pra fazer alterações nos dados de usuario
  // const [updateProfile, updating, error] = useUpdateProfile(auth);

  const HandleSignIn = (e: any) => {
    e.prevent?.default;

    // createUserWithEmailAndPassword(email, password);

    signInWithEmailAndPassword(email, password);
    console.log(user, "user");

    // updateProfile({ displayName: "vinicius" });
  };

  if (loggedInUser) router.push("/home");

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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            sx={{
              color: "#A6955A",
              background: "#031C29",
              "&:hover": {
                backgroundColor: "#053543",
              },
            }}
            onClick={HandleSignIn}
          >
            Fazer Login
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
