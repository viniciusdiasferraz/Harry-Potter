import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import useCharacter from "../../service/fetch/fetch-characters";
import Title from "@/components/Title/Title";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import { DataState } from "@/types/types";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import CardBox from "@/components/CardBox/CardBox";

export default function AllCharacters() {
  const router = useRouter();
  const { id } = router.query;
  const { data, getCharacters, getCharacterHouses, removeLoading } =
    useCharacter();
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState<DataState>();



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
            <CardBox setOpen={setOpen} data={data} setPerson={setPerson} />
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
