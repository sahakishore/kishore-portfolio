import { Card, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SkillCard from './SkillCard/skillcard.js';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: 40,
  },
  media: {
    height: 200,
    width: 200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },
  divider: {
    width: 450,
    height: 1,
    backgroundColor: "#C7C7C7",
    opacity: "0.3",
    marginBottom: 40,
    marginTop: -20,
    [theme.breakpoints.down("sm")]: {
      width: 370,
      marginTop: -10,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      marginTop: -10,
    },
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Skills = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root} id="skills">
      <Typography class="Roboto-Slab letter-spacing grey-text main-heading mt-p80 lh">
        SPECIALIZATION
      </Typography>
      <Divider className={classes.divider} />
      <AliceCarousel
        mouseTracking
        items={SkillCard}
        animationDuration={6000}
        autoPlay={true}
        autoHeight={true}
        autoWidth={true}
        disableButtonsControls={true}
        infinite={true}
        disableDotsControls={true}
      />
    </div>
  );
}

export default Skills;
