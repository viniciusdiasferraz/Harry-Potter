import { Box } from "@mui/material";
import GridHouses from "@/components/GridHouses/GridHouses";
import HeaderHome from "@/components/HeaderHome/HeaderHome";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Box
        sx={{
          backgroundImage: "url(./home-background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <GridHouses />
      </Box>
    </>
  );
}
