/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import useCharacter from "../../fetch/fetch-characters";
import CloseIcon from "@mui/icons-material/Close";
import Title from "@/components/Title";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { DataState } from "@/types/types";

const BootstrapDialog = styled(Dialog)(({ theme }: any) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AllCharacters() {
  const router = useRouter();
  const { id } = router.query;
  const { data, getCharacters, getCharacterHouses, removeLoading } =
    useCharacter();
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState<DataState>();  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (id === "all") {
    getCharacters();
  }
  if (id !== "all") {
    getCharacterHouses(id);
  }

  return (
    <>
      <Box sx={{ backgroundColor: "#0d1d26", height: "auto" }}>
        <Container
          sx={{
            maxWidth: "1280px !omportant",
            backgroundImage: "url(/background_harry_azul_marinho.png)",
            height: !removeLoading ? "100vh" : "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              position: "relative",
              top: "2rem",
            }}
          >
            <Title text={"Personagens"} textTransform={"uppercase"} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4rem",
                justifyContent: "center",
              }}
            >
              {data?.map((item: DataState, index: number) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img
                    src={item.image === "" ? "/semImagem.jpg" : item.image}
                    alt=""
                    width={163}
                    height={227}
                    style={{
                      border: "0.2rem solid #A6955A",
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                    onClick={() => {
                      setPerson(item);
                      handleOpen();
                    }}
                  />
                  <Typography sx={{ color: "#A6955A", fontSize: "1.2rem" }}>
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            {!removeLoading && <Loading />}
          </Box>
        </Container>
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
                    {person?.name}
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
                    {person?.house}
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
                    {person?.species}
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
                    {person?.dateOfBirth}
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
                    {person?.patronus}
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
                      {person?.wand?.wood}
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
                      {person?.wand?.core}
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
                      {person?.wand?.length}
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
                    {person?.ancestry}
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
                    {person?.actor}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </DialogContent>
        </BootstrapDialog>
      </Box>
    </>
  );
}
