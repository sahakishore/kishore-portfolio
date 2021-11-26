import React from "react";
import "../index.css";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    // minHeight: "100vh",
  },
  text1: {
    color: "#18FFFF",
    fontSize: "1em",
    lineHeight: 0,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      paddingTop: 100,
      marginLeft: 15,
      fontSize: "1.2em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
      marginLeft: 5,
    },
  },
  img: {
    paddingTop: 50,
    [theme.breakpoints.down("md")]: {
      paddingTop: 75,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
      width: "100%",
    },
  },
}));

function Heros(props) {
  const classes = useStyle();
  return (
    <div className={classes.root} id="home">
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography className={classes.text1}>Hi There, I'm</Typography>
          <Typography class="Roboto-Slab letter-spacing grey-text heading lh mt-60">
            {/* Kishore Saha */}
            Kishore
          </Typography>
          <Typography class="Azeret-Mono grey-text subtitle">
            Web Designer & Developer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.img}>
            <img
              class="ml-n50 mb-n5 "
              className={classes.image}
               src="/kishore.jpg"
              alt="avatar"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Heros;
