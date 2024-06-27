import { useRouter } from "next/navigation";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import SideBar from "./SideBar";
import { useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


export default function Header() {
  const { push } = useRouter()

  const pageReloadHome = () => {
    push("/home");
  }

  const [open, setOpen] = useState(false)

  const isClose = () => {
    setOpen(false)
  }

  return (

    <Box sx={{ backgroundColor: "#A6955A", width: "100%", height: "10vh", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "55%", justifyContent: "space-between" }}>
        <Button onClick={() => setOpen(true)} startIcon={<DensityMediumIcon />} sx={{ color: "#031C29" }}></Button>
        <Image
          src="/logo-pages.png"
          alt="Logo Page"
          width={210}
          height={75}
          style={{ cursor: "pointer" }}
          onClick={() => { pageReloadHome() }}
        />
      </Box>
      <SideBar open={open} isClose={isClose} />
    </Box>
  )
}