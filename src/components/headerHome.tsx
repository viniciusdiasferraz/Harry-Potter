import { Box, Button } from "@mui/material"
import { useRouter } from "next/router";
import { useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SideBar from "./SideBar";

export default function HeaderHome() {
  const { push } = useRouter();
  const [open, setOpen] = useState(false)

  const isClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box sx={{ backgroundColor: "#A6955A", width: "100%", height: "10vh", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", gap: "1rem" }} >
        <Box>
          <Button onClick={() => setOpen(true)} startIcon={<DensityMediumIcon />} sx={{ color: "#031C29" }}></Button>
        </Box>
        <Box sx={{ display: "flex", gap: '1rem' }}>
          <Button sx={{
            color: "#A6955A", background: "#031C29", "&:hover": {
              backgroundColor: "#053543",
            },
          }}
            onClick={() => { push("/allCharacters/all") }}> Veja todos os personagens </Button>

          <Button sx={{
            color: "#A6955A", background: "#031C29", "&:hover": {
              backgroundColor: "#053543",
            },
          }}
            onClick={() => { push("") }}>Entrar</Button>
        </Box>
      </Box>
      <SideBar open={open} isClose={isClose} />
    </>
  )
}