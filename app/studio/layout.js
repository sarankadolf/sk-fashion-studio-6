"use client"
import Header from "@/components/header/header";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(()=>({
    mainContent: {
        width: "100%",
        height: "100%",
        background: "#e6ebfa",
        display: "flex",
        justifyContent: "center",
        "&::-webkit-scrollbar": {
          display: "none"
        }
    },
    layout: {
        background: "white",
        borderRadius: "5px",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        ["@media (min-width:450px) and (min-width:425px)"]: {
            width: "30%",
            marginTop: "20px",
            height: "calc(100vh - 120px)"
        },
        ["@media (max-width:450px)"]:{
            width: "100%",
            height: "100vh"
        }
    }
}))

export default function StudioLayout({
    children, // will be a page or nested layout
  }) {
    const classes = useStyles();
    return (
      <section>
        <Header classes={undefined}/>
        <Box className={classes.mainContent}>
            <Box className={classes.layout}>
                {children}
            </Box>
        </Box>
      </section>
    );
}