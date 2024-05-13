import { Box } from "@mui/material";
import Image from "next/image";
import loading from "../../public/loading.gif";


export default function Loading() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "55vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={loading} alt="Loader"/>
    </Box>
  );
}
