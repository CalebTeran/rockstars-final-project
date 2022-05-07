import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode:'dark'
  },
});

export type AppTheme = typeof theme;
