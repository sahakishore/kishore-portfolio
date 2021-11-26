import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import About from "../Components/about";
import Contact from "../Components/contact";
import Heros from "../Components/heros";
import Skills from "../Components/skills";
import Work from "../Components/work";
import Header from "../Layouts/header";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#263238",
  },
}));

function Index(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header />
      <Container>
        <Heros />
        <About />
        <Work />
        <Skills />
        <Contact />
      </Container>
    </div>
  );
}

export default Index;
