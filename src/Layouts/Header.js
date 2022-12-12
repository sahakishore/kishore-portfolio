import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-scroll";

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "#263238",
  },
  title: {
    display: "none",
    fontFamily: "cursive",
    fontSize: "1.6em",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    height: 50,
    width: 50,
  },
  navText: {
    color: "#707070",
    textDecoration: "none",
    fontSize: "1em",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: 15,
    marginRight: 15,
    "&:hover": {
      color: "#18FFFF",
    },
  },
  mobNavigation: {
    color: "#000",
    textDecoration: "none",
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  //let navigate = useNavigate();
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onClickRedirect = () => {

    let path = `https://drive.google.com/file/d/1lMQUUmNDzFA1skH7faiimn95WdbeE043`;

    history.push(path);
  }


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          className={classes.mobNavigation}
        >
          home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          className={classes.mobNavigation}
        >
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="myWork"
          spy={true}
          smooth={true}
          offset={-120}
          className={classes.mobNavigation}
        >
          My Work
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-120}
          className={classes.mobNavigation}
        >
          Specialization
        </Link>
      </MenuItem>


      <MenuItem>
        {/* <Button
          id="basic-button"
          //aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          //aria-expanded={open ? 'true' : undefined}
          onClick={onClickRedirect}
        >
          My CV
        </Button> */}
        {/* 
        <Link
          to=""
          spy={true}
          smooth={true}
          className={classes.mobNavigation}
        >
          <a href="https://drive.google.com/file/d/1lMQUUmNDzFA1skH7faiimn95WdbeE043">
            My CV
          </a>
        </Link> */}

      </MenuItem>



      <MenuItem>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          className={classes.mobNavigation}
        >
          Contact
        </Link>
      </MenuItem>



    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#263238" }}
        elevation={0}
      >
        <Toolbar>
          <img src="/ASC.svg" alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              className={classes.navText}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              className={classes.navText}
            >
              About
            </Link>

            <Link
              to="myWork"
              spy={true}
              smooth={true}
              offset={-120}
              className={classes.navText}
            >
              My Work
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-120}
              className={classes.navText}
            >
              Specialization
            </Link>

            <MenuItem>
              {/* <Button
                id="basic-button"
                // aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                //aria-expanded={open ? 'true' : undefined}
                onClick={onClickRedirect}
              >
                Dashboard
              </Button> */}
              {/* 
        <Link
          to=""
          spy={true}
          smooth={true}
          className={classes.mobNavigation}
        >
          <a href="https://drive.google.com/file/d/1lMQUUmNDzFA1skH7faiimn95WdbeE043">
            My CV
          </a>
        </Link> */}

            </MenuItem>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              className={classes.navText}
            >
              Contact
            </Link>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Header