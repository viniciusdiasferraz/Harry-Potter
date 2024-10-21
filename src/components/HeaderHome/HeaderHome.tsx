import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SideBar from "../MenuDrawer/MenuDrawer";
import { useAuth } from "@/context/AuthContext";
import hasTokenExpired from "@/utils/tokenExpired";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/service/firebaseConfig";

export default function HeaderHome() {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const loggedInUser = useAuth();
  const [signOut] = useSignOut(auth);
  const router = useRouter();

  const isClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const checkSession = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const { loginDate, expirationTime } = JSON.parse(storedUser);

        if (hasTokenExpired(loginDate, expirationTime)) {
          localStorage.removeItem("user");
          signOut();
          router.push("/");
        }
      }
    };

    const interval = setInterval(checkSession, 1000);

    return () => clearInterval(interval);
  }, [signOut, router]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#A6955A",
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <Box>
          <Button
            onClick={() => setOpen(true)}
            startIcon={<DensityMediumIcon />}
            sx={{ color: "#031C29" }}
          ></Button>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem", height: "5vh" }}>
          <Button
            sx={{
              color: "#A6955A",
              background: "#031C29",
              "&:hover": {
                backgroundColor: "#053543",
              },
            }}
            onClick={() => {
              push("/characters/all");
            }}
          >
            {" "}
            Veja todos os personagens{" "}
          </Button>

          {!loggedInUser && (
            <>
              <Button
                sx={{
                  color: "#A6955A",
                  background: "#031C29",
                  "&:hover": {
                    backgroundColor: "#053543",
                  },
                }}
                onClick={() => {
                  push("/LoginPage");
                }}
              >
                Entrar
              </Button>

              <Button
                sx={{
                  color: "#A6955A",
                  background: "#031C29",
                  "&:hover": {
                    backgroundColor: "#053543",
                  },
                }}
                onClick={() => {
                  push("");
                }}
              >
                Cadastre-se
              </Button>
            </>
          )}
        </Box>
      </Box>
      <SideBar open={open} isClose={isClose} />
    </>
  );
}
