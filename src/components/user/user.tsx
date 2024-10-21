import { useAuth } from "@/context/AuthContext";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { auth } from "@/service/firebaseConfig";
import { useSignOut } from "react-firebase-hooks/auth";

export default function User() {
  const loggedInUser = useAuth();
  const URLImage = loggedInUser?.photoURL || "/semImagem.jpg";
  const { push } = useRouter();
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = () => {
    signOut().then(() => {
      localStorage.removeItem("user");

      push("/LoginPage");
    });
  };

  return (
    <>
      {loggedInUser && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Image
              src={URLImage}
              alt="Avatar"
              width={55}
              height={55}
              style={{ border: "0.1rem solid #031c29", borderRadius: "100%" }}
            />
            <Typography sx={{ color: "#A6955A", fontSize: "1.2rem" }}>
              {loggedInUser?.displayName}
            </Typography>
          </Box>
          <Tooltip title="Logout" arrow>
            <IconButton onClick={handleLogout} sx={{ color: "#A6955A" }}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </>
  );
}
