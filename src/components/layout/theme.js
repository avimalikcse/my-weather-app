import { createTheme } from "@mui/material";
import { indigo, lightBlue, red } from "@mui/material/colors";
const white = "#FFF";
const black = "#000";

export default createTheme({
    palette: {
        type: "dark",
        background: {
            light: "#86B9E0",
            dark: "rgb(26, 26, 26)",
        },
        common: {
            white,
            black,
        },
        primary: indigo,
        secondary: lightBlue,
        error: red,
        contrastThreshold: 3,
    },
    typography: {
        fontFamily: "Open Sans",
    },
});