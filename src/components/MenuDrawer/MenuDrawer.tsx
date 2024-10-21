import { MenuDrawerProps } from "@/types/types";
import { Box, Button, Drawer } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import User from "../user/user";

const HouseButton = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      borderRadius: "0.5rem",
      cursor: "pointer",
      alignItems: "center",
      padding: "0.5rem",
      transition: "background-color 0.2s",
      "&:hover": {
        backgroundColor: "#053543",
      },
    }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
  >
    <Image src={icon} width={50} height={50} alt={`${label} Icon`} />
    <Button
      sx={{
        color: "#A6955A",
        marginLeft: "1rem",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      {label}
    </Button>
  </Box>
);

export default function MenuDrawer(props: MenuDrawerProps) {
  const { push } = useRouter();
  const { open, isClose } = props;
  const [house, setHouse] = useState<string>("");

  if (house) {
    push(`/characters/${house}`);
  }

  return (
    <Drawer
      open={open}
      onClose={isClose}
      PaperProps={{
        sx: {
          width: 250,
          background: "#031C29",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        },
      }}
    >
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
        <HouseButton
          icon="/gryffindor-icon.png"
          label="Grifinória"
          onClick={() => setHouse("gryffindor")}
        />
        <HouseButton
          icon="/slytherin-icons.png"
          label="Sonserina"
          onClick={() => setHouse("slytherin")}
        />
        <HouseButton
          icon="/lufa-lufa-icons.png"
          label="Lufa - Lufa"
          onClick={() => setHouse("hufflepuff")}
        />
        <HouseButton
          icon="/ravenclaw-icons.png"
          label="Corvinal"
          onClick={() => setHouse("ravenclaw")}
        />
      </Box>
      <Box sx={{ padding: "1rem" }}>
        <User />
      </Box>
    </Drawer>
  );
}
