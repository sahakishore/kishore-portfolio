import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  educationCard: {
    borderRadius: 10,
    backgroundColor: "#394B53",
    padding: 15,
    marginTop: 40,
    height: 100,
    [theme.breakpoints.down("sm")]: {
      height: 120,
      marginTop: 40,
    },
    [theme.breakpoints.down("xs")]: {
      height: 120,
      marginTop: 0,
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

function Education(props) {
  const classes = useStyle();
  return (
    <div>
      <Card elevation={0} className={classes.educationCard}>
        <Typography className={classes.heading}>Education</Typography>
        <Typography className={classes.body}>
          Completed M-Tech in Computer Science and Engineering from Kalyani Government Engineering College, Kalyani (WestBengal) of batch 2018 - 2020.
        </Typography>
      </Card>
    </div>
  );
}

export default Education;
