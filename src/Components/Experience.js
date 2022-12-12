import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  experienceCard: {
    borderRadius: 10,
    backgroundColor: "#394B53",
    padding: 15,
    marginTop: 40,
    height: 100,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  heading: {
    fontSize: "1em",
    color: "#C7C7C7",
    fontWeight: "bold",
  },
  body: {
    fontSize: "0.8em",
    color: "#B5B5B5",
    marginTop: 10,
  },
}));

const Experience = (props)=> {
  const classes = useStyle();
  return (
    <div>
      <Card elevation={0} className={classes.experienceCard}>
        <Typography className={classes.heading}>Experience</Typography>
        <Typography className={classes.body}>
          Working with <a className={classes.heading} href="https://redblink.com/">RedBlink</a> as a Full Stack Developer. Having 3+ Years of
          experience in Web Development.
        </Typography>
      </Card>
    </div>
  );
}

export default Experience;
