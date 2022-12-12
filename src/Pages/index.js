import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Heros from "../Components/Heros";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Header from "../Layouts/Header";

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
