import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer"; 
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText"; 
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";
import ContactsIcon from "@mui/icons-material/Contacts"; 
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain"; 
import logo from "../assets/client-logos/logo.svg";
const useStyles = makeStyles((theme) => ({
  BrandNameStyle: {
    fontSize: "30px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,

    color: "#ff4105",

    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   lineHeight: "65px",
  },
  menuItem: {
    "& .MuiTypography-root": {
      fontSize: "13px",
      fontWeight: 500,
      color: "#ff4105",
    },
  },
  active: {
    // background: "#5AFF8080 !important",
    background: "#ff410520 !important",
    borderRadius: "10px !important",
  },
}));

export default function NavbarDrawer({ openDrawer, fnActive, active }) {
  const classes = useStyles();
  const [activeDrawer, setactiveDrawer] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  useEffect(() => {
    if (activeDrawer) {
      document.getElementById("drawer").click();
    }
  }, [openDrawer]);
  useEffect(() => {
    setactiveDrawer(true);
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          className={`${classes.itemStyle}   `}
          onClick={() => fnActive("Home")}
        >
          {/* <p className={`${classes.BrandNameStyle}`}>NAYON</p> */}
          <img src={logo} alt="" height="50px" />
        </ListItem>
        <Divider />
        <br />
        <ListItem
          button
          className={`${classes.itemStyle}  ${
            active === "HOME" ? classes.active : null
          }`}
          onClick={() => fnActive("HOME")}
        >
          <ListItemIcon style={{ color: "#ff4105", minWidth: "35px" }}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>HOME</ListItemText>
        </ListItem>

        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "CLIENTS" ? classes.active : null
          }`}
          onClick={() => fnActive("CLIENTS")}
        >
          <ListItemIcon style={{ color: "#ff4105", minWidth: "35px" }}>
            <AcUnitIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>CLIENTS</ListItemText>
        </ListItem>
        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "SERVICES" ? classes.active : null
          }`}
          onClick={() => fnActive("SERVICES")}
        >
          <ListItemIcon style={{ color: "#ff4105", minWidth: "35px" }}>
            <GrainIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>
            SERVICES
          </ListItemText>
        </ListItem>

        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "CONTACT" ? classes.active : null
          }`}
          onClick={() => fnActive("CONTACT")}
        >
          <ListItemIcon style={{ color: "#ff4105", minWidth: "35px" }}>
            <ContactsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>CONTACT</ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            id="drawer"
            onClick={toggleDrawer(anchor, true)}
            style={{ display: "none" }}
          >
            {anchor}
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            // PaperProps={{
            //   sx: {
            //     backgroundColor: "#061A38",
            //   },
            // }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
