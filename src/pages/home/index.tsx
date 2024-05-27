import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Title from "../../components/Title";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [house, setHouse] = useState<string>("");

  const handleChangeAllCharacters = () => {
    router.push("/allCharacters/all");
  };

  if (house) {
    router.push(`/allCharacters/${house}`);
  }

  return (
    <>
      <Box sx={{ backgroundColor: "#A6955A", width: "100%", height: "4vh" }} />
      <Box
        sx={{
          backgroundImage: "url(./home-background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            maxWidth: "1280px !important",
            margin: " 0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "77vh",
              justifyContent: "space-evenly",
            }}
          >
            <Image
              src="/logo-home.png"
              alt="Logo Home"
              width={356}
              height={175}
              style={{ position: "relative", left: "2rem" }}
            />
            <Button
              sx={{
                ml: "4%",
                backgroundColor: "#A6955A",
                color: "#031C29",
                display: "flex",
                flexDirection: "column",
                height: "8vh",
                width: "17%",
                padding: "0",
                "&:hover": {
                  backgroundColor: "#c9b570",
                },
              }}
              onClick={() => handleChangeAllCharacters()}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                veja todos
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                os personagens
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Title text={"Navegue pelas casas"} />
            <Grid
              sx={{
                display: "flex",
                width: "100%",
                gap: "2rem",
                justifyContent: "center",
                zIndex: "1",
                padding: "2rem",
              }}
            >
              <Image
                src="/grifinoria.png"
                alt="Logo Home"
                width={272}
                height={288}
                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
                onClick={() => {
                  setHouse("gryffindor");
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <Image
                src="/sonserina.png"
                alt="Logo Home"
                width={272}
                height={288}
                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
                onClick={() => setHouse("Slytherin")}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <Image
                src="/lufa-lufa.png"
                alt="Logo Home"
                width={272}
                height={288}
                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
                onClick={() => setHouse("Hufflepuff")}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <Image
                src="/corvinal.png"
                alt="Logo Home"
                width={272}
                height={288}
                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
                onClick={() => setHouse("Ravenclaw")}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
