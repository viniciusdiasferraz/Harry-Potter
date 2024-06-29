import { CardBoxPorps, DataState } from "@/types/types";
import { Box, Typography } from "@mui/material";



export default function CardBox(props: CardBoxPorps) {

  const { setOpen, data, setPerson } = props

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4rem",
        justifyContent: "center",
      }}
    >
      {Array.isArray(data) && data?.map((item: DataState, index: number) => (
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
  )
}