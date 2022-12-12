import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import About from "../Components/About.js";
import Contact from "../Components/Contact.js";
import Heros from "../Components/Heros.js";
import Skills from "../Components/Skills.js";
import Work from "../Components/Work.js";
import Header from "../Layouts/Header.js";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#263238",
  },
}));

const Main = (props)=> {
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

export default Main;
