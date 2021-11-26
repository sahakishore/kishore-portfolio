import { Card, Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  divider: {
    width: 200,
    height: 1,
    backgroundColor: "#C7C7C7",
    marginBottom: 40,
    marginTop: -20,
    opacity: "0.3",
    [theme.breakpoints.down("sm")]: {
      width: 175,
      marginTop: -10,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      marginTop: -10,
    },
  },
  media: {
    height: 200,
    width: "100%",
    marginTop: 15,
  },
  cardStyle: {
    padding: 10,
    backgroundColor: "#37474F",
    borderRadius: 0,
  },
  title: {
    fontSize: "1em",
    color: "#18FFFF",
    letterSpacing: 1,
  },
  viewBtn: {
    marginLeft: "auto",
    color: "#949494",
    cursor: "pointer",
  },
  btn: {
    marginTop: 40,
    backgroundColor: "#18F1F1",
    color: "#000",
  },
  flex: {
    display: "flex",
  },
}));

const MyWork = [
  {
    title: "Rasp Webapp using React.js, Contentful CMS",
    img: "/Rasp.png",
    link: "https://rasp.com.au/",
  },
  {
    title: "Mileauto Webapp using Next.js, RJFS",
    img: "/Mile.png",
    link: "https://login-academic.herokuapp.com/",
  },
  {
    title: "Movie Webapp Using MERN Stack",
    img: "/Vidly.png",
    link: "https://radiant-fortress-76822.herokuapp.com/movies",
  },
  {
    title: "Online Selling Store ( using React Native )",
    img: "/Donewithit.png",
    link: "https://expo.dev/@sahakishore/DoneWithIt",
  },
];

function Work(props) {
  const classes = useStyle();
  return (
    <div id="myWork">
      <Typography class="Roboto-Slab letter-spacing grey-text main-heading mt-p80 lh">
        WORKS
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {MyWork.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <a
              href={item.link}
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Card className={classes.cardStyle} elevation={0}>
                <div className={classes.flex}>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                  <ArrowForward className={classes.viewBtn} />
                </div>
                <img alt="projects" src={item.img} className={classes.media} />
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
      {/* <Button className={classes.btn} variant="contained">
        View All Works
      </Button> */}
    </div>
  );
}

export default Work;
