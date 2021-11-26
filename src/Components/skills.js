import { Card, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/html.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        HTML
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/css.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        CSS
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/javascript.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        Javascript
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/react-js.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        react
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/next-js.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        next.js
      </Typography>
    </Card>
  </Card>,
];

function Skills(props) {
  const classes = useStyle();
  return (
    <div className={classes.root} id="skills">
      <Typography class="Roboto-Slab letter-spacing grey-text main-heading mt-p80 lh">
        SPECIALIZATION
      </Typography>
      <Divider className={classes.divider} />
      <AliceCarousel
        mouseTracking
        items={items}
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
