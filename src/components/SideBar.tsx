import { Box, Button, Drawer } from "@mui/material"
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SideBar(props: any) {
  const { push } = useRouter();
  const { open, isClose } = props
  const [house, setHouse] = useState<string>("");

  if (house) {
    push(`/allCharacters/${house}`);
  }

  return (
    <Drawer open={open} onClose={isClose} PaperProps={{
      sx: {
        width: 250,
        background: "#031C29",
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        gap: "1rem"
      }
    }}>
      <Box sx={{
        display: "flex",
        width: "100%",
        borderRadius: "0.5rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#053543",
        },
      }}
        onClick={() => { setHouse("gryffindor") }}>
        <Image src={"/gryffindor-icon.png"} width={50} height={50} alt="Griffindor Icon" />
        <Button sx={{
          color: "#A6955A",
          "&:hover": {
            backgroundColor: "transparent",
          }
        }}
        >
          Grifinória
        </Button>
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        borderRadius: "0.5rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#053543",
        },
      }}
        onClick={() => { setHouse("Slytherin") }}>
        <Image src={"/slytherin-icons.png"} width={50} height={50} alt="Slytherin Icon" />
        <Button sx={{
          color: "#A6955A",
          "&:hover": {
            backgroundColor: "transparent",
          }
        }}
        >
          Sonserina
        </Button>
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        borderRadius: "0.5rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#053543",
        },
      }}
        onClick={() => { setHouse("Hufflepuff") }}>
        <Image src={"/lufa-lufa-icons.png"} width={50} height={50} alt="Hufflepuff Icon" />
        <Button sx={{
          color: "#A6955A",
          "&:hover": {
            backgroundColor: "transparent",
          }
        }}
        >
          Lufa - Lufa
        </Button>
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        borderRadius: "0.5rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#053543",
        },
      }}
        onClick={() => { setHouse("Ravenclaw") }}>
        <Image src={"/ravenclaw-icons.png"} width={50} height={50} alt="Ravenclaw Icon" />
        <Button sx={{
          color: "#A6955A",
          "&:hover": {
            backgroundColor: "transparent",
          }
        }}
        >
          Corvinal
        </Button>
      </Box>
    </Drawer>
  )
}