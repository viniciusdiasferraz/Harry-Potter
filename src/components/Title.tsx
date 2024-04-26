import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Title({ text, textTransform }: any) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <Image
        src="/hogwarts_shield.png"
        alt="Logo Home"
        width={72}
        height={84}
        style={{ position: "relative", left: "3rem" }}
      />
      <Typography
        sx={{
          fontSize: "24px",
          width: "25%",
          fontWeight: "400",
          color: "#A6955A",
          position: "relative",
          left: "4rem",
          textTransform: textTransform ,
        }}
      >
        {text}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#A6955A",
          width: "65%",
          height: "0.5vh",
        }}
      />
    </Box>
  );
}
