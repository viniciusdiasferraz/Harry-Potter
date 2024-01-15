import { Box, Button, Container, Grid, Typography } from "@mui/material"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Box sx={{ backgroundColor: "#A6955A", width: "100%", height: "4vh" }} />
      <Box sx={{ backgroundImage: "url(./home-background.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} >
        <Container sx={{ display: "flex", flexDirection: "column", height: "77vh", justifyContent: "space-evenly" }}>
          <Image
            src="/logo-home.png"
            alt="Logo Home"
            width={356}
            height={175}
          />
          <Button sx={{ ml: "4%", backgroundColor: "#A6955A", color: "#031C29", display: "flex", flexDirection: "column", height: "8vh", width: "17%", padding: "0" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>veja todos</Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>os personagens</Typography>
          </Button>
        </Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Container sx={{ display: "flex", alignItems: 'center', gap: "2rem" }}>
            <Image
              src="/hogwarts_shield.png"
              alt="Logo Home"
              width={72}
              height={84}
            />
            <Typography sx={{ fontSize: "24px", width: "25%", fontWeight: "400", color: "#A6955A" }}>Navegue pelas casas</Typography>
            <Box sx={{ backgroundColor: "#A6955A", width: "75%", height: "0.5vh" }} />
          </Container>

          <Grid sx={{ display: "flex", width: "100%", gap: "2rem", justifyContent: 'center', mt: "18vh", zIndex: '1' }}>
            <Box sx={{ backgroundImage: "url(./grifinoria.png)", width: "17rem", height: "47.4vh" }}></Box>
            <Box sx={{ backgroundImage: "url(./sonserina.png)", width: "17rem", height: "47.4vh" }}></Box>
            <Box sx={{ backgroundImage: "url(./lufa-lufa.png)", width: "17rem", height: "47.4vh" }}></Box>
            <Box sx={{ backgroundImage: "url(./corvinal.png)", width: "17rem", height: "47.4vh" }}></Box>
          </Grid>
        </Box>
        <Box sx={{ backgroundColor: "#031C29", width: "100%", height: "60vh", position: "relative", bottom: "12rem" }} />
      </Box >
    </>
  )
}