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
import { useEffect, useState } from "react";
import useCharacter from "../../service/fetch/fetch-characters";
import CloseIcon from "@mui/icons-material/Close";
import Title from "@/components/Title";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import { DataState } from "@/types/types";
import Modal from "@/components/Modal";

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


  useEffect(() => {
    if (id === "all") {
      getCharacters();
    }
    if (id !== "all") {
      getCharacterHouses(id);
    }
  }, [id])


  return (
    <>
      <Header />
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
        <Modal
          handleClose={handleClose}
          open={open}
          person={person}
        />
      </Box>
    </>
  );
}
