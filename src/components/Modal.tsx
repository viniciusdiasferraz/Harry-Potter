import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropsModal } from "@/types/types";

const BootstrapDialog = styled(Dialog)(({ theme }: any) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Modal({ open, handleClose, person }: PropsModal) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ width: "100%" }}
      fullWidth={true}
      maxWidth={"md"}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "#031C29",
          backgroundColor: "#A6955A",
          width: "25px",
          height: "25px",
          ":hover": {
            backgroundColor: "rgba(166, 149, 90, 0.5)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ background: "#171717" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100%",
          }}
        >
          <img
            src={person?.image === "" ? "/semImagem.jpg" : person?.image}
            alt=""
            width={"29.5%"}
            height={"73.2%"}
            style={{ border: "0.2rem solid #A6955A", objectFit: "cover" }}
          />
          <Box width={"40%"}>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Nome:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.name ? person?.name : "No description"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Casa:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.house ? person?.house : "No description"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Espécie:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.species ? person?.species : "No description"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Data de Nasc:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.dateOfBirth ? person?.dateOfBirth : " No description"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Patronus:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.patronus ? person?.patronus : " No description"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Varinha:
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#A6955A",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                - Madeira:
                <Typography sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                  {person?.wand?.wood ? person?.wand?.wood : "No description"}
                </Typography>
              </Typography>{" "}
              <Typography
                sx={{
                  color: "#A6955A",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                - Núcleo:
                <Typography sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                  {person?.wand?.core ? person?.wand?.core : " No description"}
                </Typography>
              </Typography>{" "}
              <Typography
                sx={{
                  color: "#A6955A",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                - Comprimento:
                <Typography sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                  {person?.wand?.length ? person?.wand?.length : "No description"}
                </Typography>
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Ancestralidade:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.ancestry ? person?.ancestry : "No description"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#A6955A",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Ator:
              <Typography sx={{ color: "#ffffff", fontSize: "1rem" }}>
                {person?.actor ? person?.actor : "No description"}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  )
}