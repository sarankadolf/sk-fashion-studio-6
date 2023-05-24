"use client"
import { makeStyles } from "@material-ui/core";
import '../public/static/max.css';
const useStyles = makeStyles((theme)=>({
  body: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    fontFamily: "ProximaNova-Regular"
  }
}));

export default function RootLayout({ children }) {
  const classes = useStyles();
  return (
    <html lang="en">
      <body className={classes.body}>{children}</body>
    </html>
  )
}
