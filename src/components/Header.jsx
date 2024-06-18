import { useRouter } from "next/navigation";
import Image from "next/image";
import { Box } from "@mui/material";


export default function Header() {
    const { push } = useRouter()

    const pageReloadHome = () => {
        push("/home");
    }

    return (
        <Box sx={{ backgroundColor: "#A6955A", width: "100%", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
                src="/logo-pages.png"
                alt="Logo Page"
                width={210}
                height={75}
                style={{ cursor: "pointer" }}
                onClick={() => { pageReloadHome() }}
            />
        </Box>
    )
}