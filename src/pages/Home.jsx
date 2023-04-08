import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import nayon from "../assets/images/nayon.jpg";
import Image1 from "../assets/images/Image1.png";
import fbIcon from "../assets/images/fbIcon.png";
import logo from "../assets/images/logo4.png";
import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";
import Consulting from "../assets/client-logos/Consulting.svg";
import creative from "../assets/client-logos/creative.svg";
import DigitalCustomerExperience from "../assets/client-logos/DigitalCustomerExperience.svg";
import ecommerce from "../assets/client-logos/ecommerce.svg";
import marketing from "../assets/client-logos/marketing.svg";
import Sales from "../assets/client-logos/Sales.svg";
import softwaredevelopment from "../assets/client-logos/softwaredevelopment.svg";
import Startups from "../assets/client-logos/Startups.svg";
import TalentManagement from "../assets/client-logos/TalentManagement.svg";
import NewrozImage from "../assets/images/NewrozImage.png";
import PaymentIntegration from "../assets/images/Payment-Integration.png";
import homeBackground from "../assets/images/homeBackground.png";
import CartSystem from "../assets/images/CartSystem.png";
import supportPanel from "../assets/images/supportPanel2.png";
import kindercubby from "../assets/images/kindercubby.png";
import kindercubbyAdmin from "../assets/images/kindercubbyAdmin.png";
import skill from "../assets/images/skill.png";
import education from "../assets/images/education.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarDrawer from "./NavbarDrawer";
import WhatIKnow from "./WhatIKnow";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import StopIcon from "@mui/icons-material/Stop";
import TextTransition, { presets } from "react-text-transition";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AOS from "aos";
import "aos/dist/aos.css";
import Email from "./Email";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const useStyles = makeStyles((theme) => ({
  themeBackground: {
    backgroundColor: "#FFE6C7",
    // background: "#2b2741",
    // boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
  },
  homeContainerStyle: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  homeSectionStyle: {
    minHeight: "calc(100vh - 70px)",
    display: "flex !important",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      minHeight: "700px",
    },
    [theme.breakpoints.down("lg")]: {
      minHeight: "700px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 70px)",
    },
  },

  BrandNameStyle: {
    fontSize: "30px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,

    color: "#E3E56D",
    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   lineHeight: "65px",
  },
  designationStyle2: {
    fontSize: "42px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
    lineHeight: "80px",
    color: "#22092b",
    [theme.breakpoints.down("xl")]: {
      fontSize: "45px",
      lineHeight: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "35px",
      textAlign: "center",
    },
  },
  h1: {
    fontSize: "100px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "0 0 20px 0",
    // lineHeight: "150px",
    color: "#E3E56D",
    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   // lineHeight: "65px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "22px",
    //   // lineHeight: "35px",
    //   textAlign: "center",
    // },
  },
  h2: {
    fontSize: "45px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "0px 0px 50px 0px",
    color: "#061A38",
    position: "relative",

    // "&:after": {
    //   content: "''",
    //   position: "absolute",
    //   top: 5,
    //   left: 0,
    //   width: "120px",
    //   height: "100%",
    //   borderBottom: "3px solid #22092b",
    // },
    [theme.breakpoints.down("xl")]: {
      margin: "0px 0px 35px 0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      margin: "0px 0px 25px 0px",
      // "&:after": {
      //   width: "80px",
      // },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      // "&:after": {
      //   width: "50px",
      // },
    },
  },
  h3: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  h4: {
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  h5: {
    fontSize: "20px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  cardSubTitle: {
    fontSize: "18px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  workCard: {
    background: "#fff",
    minHeight: "220px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "150px",
    },
  },
  workCardImg: {
    width: "210px",
    height: "140px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    position: "absolute",
    left: "-20px",
    top: "calc(100% - 70px)",
    [theme.breakpoints.down("xl")]: {
      width: "280px",
      height: "180px",
      top: "calc(100% - 90px)",
    },
    [theme.breakpoints.down("md")]: {
      width: "210px",
      height: "140px",
      top: "calc(100% - 70px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "80px",
      top: "calc(100% - 40px)",
    },
  },
  workCardImg2: {
    width: "210px",
    height: "140px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    position: "absolute",
    right: "-20px",
    top: "calc(100% - 70px)",
    [theme.breakpoints.down("xl")]: {
      width: "280px",
      height: "180px",
      top: "calc(100% - 90px)",
    },
  },
  workCardDetailSide: {
    paddingRight: "40px !important",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "10px !important",
    },
  },
  workCardDetailSide2: {
    paddingLeft: "40px !important",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px !important",
    },
  },
  workCardText: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#061A38",
    margin: "10px 0 0 0",
    letterSpacing: "1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      margin: "5px 0 0 0",
    },
  },
  pictureHolder: {
    background: "transparent",
    border: "2px solid #fff",
    width: "350px !important",
    height: "350px",
    margin: "auto",
    borderRadius: "50%",
    [theme.breakpoints.down("xl")]: {
      width: "260px !important",
      height: "260px",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px !important",
      height: "180px",
    },
  },
  pictureBox: {
    width: "320px",
    height: "320px",
    overflow: "hidden",
    borderRadius: "50%",
    [theme.breakpoints.down("xl")]: {
      width: "230px",
      height: "230px",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "50%",
      width: "150px",
      height: "150px",
    },
  },
  NotCard: {
    padding: "30px",

    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },
  },
  card: {
    padding: "30px",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },
  },
  cardImage: {
    maxWidth: "120px",
    [theme.breakpoints.down("xl")]: {
      maxWidth: "85px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40px",
    },
  },
  cardTitle: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: "50px 0px",
    color: "#061A38",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      margin: "10px 0px",
    },
  },
  cardDetail: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    margin: "0px 0px 24px 0px",
    color: "dimgray",
    // color: "#061A38",
    lineHeight: 1.4,
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
      margin: "0px 0px 10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  cardButton: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#22092b",
    cursor: "pointer",
    padding: "0px 0px 8px 0px",
    display: "inline-block",
    // borderBottom: "2px solid #22092b",
    transition: ".5s",
    "&:hover": {
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  navbarStyle: {
    // display: "none",
    height: "70px",
    // background: "#061A38",
    background: "rgba(0,0,0,0)",
    // borderRadius: "16px 16px 0px 0px",

    bottom: 0,
    // boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  menuItem: {
    fontSize: "18px",
    // fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#22092b",
    // color: "#061A38",
    position: "relative",
    padding: "5px 20px",
    zIndex: 2,
    // "&:hover": {
    //   color: "#fff",
    // },
    // "&:before": {
    //   content: "''",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   borderBottom: "1px solid #000",
    //   borderTop: "1px solid #000",
    //   transform: "scaleY(2)",
    //   opacity: 0,
    //   transition: ".5s",
    //   zIndex: -1,
    // },
    // "&:hover:before": {
    //   opacity: 1,
    //   transform: "scaleY(1)",
    // },
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transform: "scale(0)",
      // background: "black",
      transition: ".5s",
      zIndex: -1,
      borderLeft: "1px solid #22092b",
      borderRight: "1px solid #22092b",
      // borderRadius: "10px",
    },
    "&:hover:after": {
      transform: "scale(1)",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "8px",
    },
  },
  logoStyle: {
    height: "45px",
    marginRight: "10px",
    display: "inherit",
  },
  imageStyle: {
    padding: "5px",
    border: "1px solid #F2F2F2",
    borderRadius: "5px",
    display: "block",
    marginLeft: "auto",
  },

  iconButtonStyle: {
    color: "black !important",
    border: "none !important",
    paddingLeft: "4px !important",
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "600 !important",
  },
  iconButtonStyle2: {
    color: "#666E7A !important",
    border: "1px solid #E5E5E5 !important",
    borderRadius: "25px !important",
    fontSize: "13px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "400 !important",
    ["& .MuiButton-startIcon"]: {
      marginRight: "2px !important",
    },
  },

  centerIcon: {
    display: "block",
    margin: "12px auto 7px auto",
  },
  itemStyle: {
    marginLeft: "30px !important",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      marginLeft: "10px !important",
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "8px",
    // },
  },

  active: {
    // ["& p"]: {
    //   color: "black",
    //   fontWeight: 600,
    // },
    // ["& h4"]: {
    //   color: "black",
    //   fontWeight: 600,
    // },
    // borderBottom: "2px solid black",
    borderLeft: "2px  solid #22092b",
    borderRight: "2px  solid #22092b",
    // borderRadius: "10px",
  },

  buttonStyle: {
    background: "black !important",
    padding: "0px !important",
    borderRadius: "5px !important",
  },
  cardContainer: {
    borderBottom: "2px solid #F2EFEF",
    "&:last-child": {
      borderBottom: "2px solid rgba(0,0,0,0)",
    },
  },
  inputStyle: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 4px",
  },
  // hrStyle: {
  //   borderRadius: "5px",
  //   border: "0.3px solid #E5E7E9",
  // },
  cardBox: {
    borderBottom: "1px solid #E5E7E9",
  },
  workDivStyle: {
    height: "450px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      height: "250px",
    },
    [theme.breakpoints.down("md")]: {
      height: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
  },
  workHoverDiv: {
    position: "absolute",
    zIndex: 5,
    background: "#061A3820",
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: ".5s",
    "&:hover": {
      opacity: 1,
    },
  },
  workHoverDivText: {
    position: "absolute",
    left: "30px",
    bottom: "30px",
    // width: "250px",
    // background: "#fff",
    [theme.breakpoints.down("sm")]: {
      left: "10px",
      bottom: "10px",
    },
  },
  button: {
    border: "1px solid #22092b",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    textDecoration: "none",
    color: "#22092b",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      background: "#E3E56D50",
    },
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 15px",
      marginRight: "0px",
    },
  },
  button2: {
    border: "1px solid #22092b",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    color: "#061A38",
    cursor: "pointer",
    background: "#22092b",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 25px",
    },
  },
  iconDiv: {
    width: "40px",
    height: "40px",
    border: "1px solid #22092b",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  iconStyle: {
    color: "#22092b",
    fontSize: "25px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px !important",
    },
    transition: ".5s !important",
    "&:hover": {
      transform: "scaleX(-1)",
    },
  },
  sectionPaddingAllSide: {
    padding: "50px",
    [theme.breakpoints.down("xl")]: {
      padding: "50px 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  sectionPaddingWithoutBottom: {
    padding: "50px 50px 0 50px",
    [theme.breakpoints.down("xl")]: {
      padding: "50px 200px 0 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "50px 50px 0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 0 20px",
    },
  },
  sectionPaddingRightLeft: {
    padding: "0 50px",
    [theme.breakpoints.down("xl")]: {
      padding: "0 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  nameBox: {
    marginBottom: "50px",
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "0px",
    // },
  },
  myInfoBox: {
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
  myImageBox: {
    [theme.breakpoints.down("md")]: {
      order: 1,
      marginBottom: "30px !important",
    },
  },
  marginBottomStyle: {
    marginBottom: "20px",
    [theme.breakpoints.down("xl")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "12px",
    },
  },
  designationStyle: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  cardTitleMargin: {
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8px",
    },
  },
  contactButtonBox: {
    // minHeight: "1000px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginTop: "20px !important",
    },
  },
  borderStyle1: {
    borderRight: "1px solid #E3E56D",
    borderBottom: "1px solid #E3E56D",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle2: {
    borderBottom: "1px solid #E3E56D",
    [theme.breakpoints.down("sm")]: {
      borderRight: "1px solid #E3E56D",
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle3: {
    borderRight: "1px solid #E3E56D",

    [theme.breakpoints.down("sm")]: {
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      borderBottom: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle4: {
    [theme.breakpoints.down("sm")]: {
      borderRight: "1px solid #E3E56D",
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      borderBottom: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  ForOtherVersion: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ForMobileVersion: {
    display: "none",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  // gridMargin: {
  //   [theme.breakpoints.down("sm")]: {
  //     marginTop: 50,
  //   },
  // },
  listIcon: {
    // color: "#fff",
    fontSize: "18px !important",
    marginRight: "5px",
    // background: "#061A38",
    color: "#061A38",
    border: "1px solid #061A38",
    // padding: "1px",
    borderRadius: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "6px",
    },
  },
  homeInfoBox: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "70px",
    },
  },
  experienceBox: {
    backgroundImage: `url(${skill})`,
    backgroundSize: "300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "0px",
    },
  },
  educationBox: {
    backgroundImage: `url(${education})`,
    backgroundSize: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    // marginRight: "200px !important",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "0px",
    },
  },
  linkIconStyle: {
    fontSize: "18px",
    position: "relative",
    top: 3,
  },
}));

const Home = () => {
  const classes = useStyles();
  const experienceData = [
    {
      designation: "Frontend Developer (React Js)",
      duration: "May 2021 - Present",
      company: "Newroz Technologies Limited.",
      detail: [
        "Developed and Maintaining 4 new projects (Daycare Website,API Integration Website, Daycare Website Admin Panel, Financial Admin Panel)",
        "Refactored 2 projects completely with new efficient architecture (Company Website, Support Panel).",
        "Developing and Maintaining Marketing Panel and Commission panel with new efficient architecture.",
        "Collaborating with the other developers and the testing team.",
        "Experience with creating React App design from a Adobe XD & Figma",
        "Creating reusable code and infrastructure for future use.",
        "Agile processes (Scrum & Kanban)",
      ],

      // "Mentoring, Maintain quality and ensure responsiveness of applications.",
    },
    // {
    //   designation: "Strategy & Direction",
    //   duration: "March 2020 - Present",
    //   company: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   designation: "Strategy & Direction",
    //   duration: "March 2020 - Present",
    //   company: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   designation: "Strategy & Direction",
    //   duration: "March 2020 - Present",
    //   company: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];
  const educationData = [
    {
      subject: "Professional Diploma in IT",
      session: "March 2020 - Present",
      institute: "IsDB-BISEW IT Scholarship",
      detail: [
        "Computer Fundamentals (120 hours)",
        "Design and implement databases with MS SQL Server 2016 (104 hours)",
        "Programming with C# and .Net 4.6.1 (136 hours)",
        "UML using MS Visio and MS Visual Studio (80 hours)",
        "Programming in HTML5 with JavaScript & CSS3 (128 hours)",
        "Introduction to XML, Desktop application using C#, Crystal Report (60 hours)",
        "Web Application Development with ASP.NET Web Form (80 hours)",
        "Developing ASP.NET MVC 5 and ASP.NET Core (168 hours)",
        "Web Application Development with Angular and AngularJS (92 hours)",
        "Developing Web APIs, Web Services, SignalR (92 hours)",
      ],
    },
    // {
    //   subject: "Strategy & Direction",
    //   session: "March 2020 - Present",
    //   institute: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   subject: "Strategy & Direction",
    //   session: "March 2020 - Present",
    //   institute: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   subject: "Strategy & Direction",
    //   session: "March 2020 - Present",
    //   institute: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];

  const [active, setActive] = useState("Home");
  const [reload, setReload] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const fnActive = (id) => {
    // setActive(id);
    var elmntToView1 = document.getElementById("menu");
    elmntToView1.scrollIntoView({
      behavior: "smooth",
    });

    const yOffset = -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    if (id === "Contact") {
      setTimeout(() => {
        setActive(id);
      }, 1500);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let lastId = active;
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      // console.log("scrollCheck", scrollCheck);
      let sectionId;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        // console.log("sectionTop", sectionTop, sectionTop-50);

        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          sectionId = section.getAttribute("id");
          if (lastId !== sectionId) {
            lastId = sectionId;
            setActive(sectionId);
            // console.log("sectionId", sectionId);
          }
        }
      });
    });

    // console.log("body", window.screen.availHeight);
  }, []);
  useEffect(() => {
    setReload(reload + 1);
    AOS.init({
      // offset: 200,
      duration: 1000,
      // anchorPlacement: "top-bottom",
    });
    // ==================================================
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  const TEXTS = [
    "Grow",
    "Scale",
    "Promote",
    "Plan",
    "Engage",
    "Coach",
    "Automate",
    "Track",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <div
        id="navbar"
        className={classes.themeBackground}
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          position: "sticky",
          transition: "0.3s",
          top: 0,
          zIndex: 20,
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
          id="menu"
        >
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            className={classes.navbarStyle}
          >
            <Grid item xs={6} sm={3}>
              <Grid container alignItems="center">
                <Grid item>
                  {/* <img src={logo} alt="" height="40px" /> */}
                </Grid>
                <Grid item onClick={() => fnActive("Home")}>
                  <p
                    className={classes.BrandNameStyle}
                    style={{ color: "#22092b" }}
                  >
                    oho
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={9} className={classes.ForOtherVersion}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Home" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Home")}
                >
                  <h4 className={`${classes.menuItem}`}>Home</h4>
                </Grid>
                {/* <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Experties" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Experties")}
                >
                  <h4 className={`${classes.menuItem}`}>Experties</h4>
                </Grid> */}

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Experience" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Experience")}
                >
                  <p className={classes.menuItem}>Experience</p>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "My Works" ? classes.active : null
                  }`}
                  onClick={() => fnActive("My Works")}
                >
                  <p className={classes.menuItem}>My Works</p>
                </Grid>
                {/* <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Education" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Education")}
                >
                  <p className={classes.menuItem}>Education</p>
                </Grid> */}
                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Contact" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Contact")}
                >
                  <p className={classes.menuItem}>Contact</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={9} className={classes.ForMobileVersion}>
              <MenuIcon
                fontSize="large"
                onClick={() => setOpenDrawer(!openDrawer)}
                style={{ color: "#22092b" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ overflowX: "hidden" }}>
        <div className={classes.themeBackground}>
          <Container maxWidth="xl" className={classes.homeContainerStyle}>
            <section
              id="Home"
              className={`${classes.sectionPaddingRightLeft} ${classes.homeSectionStyle}`}
            >
              <div className={classes.homeInfoBox}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  className={classes.nameBox}
                >
                  {/* <Fade left cascade enter spy={reload}> */}
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        display: "inline-block",
                        letterSpacing: ".08em",
                        color: "#22092b",
                        marginBottom: "30px",
                        backgroundColor: "#fcd408",
                        borderRadius: "0.8rem",
                        padding: "0.8rem 1.6rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      TOP-RATED SALES ENABLEMENT PLATFORM
                    </p>
                    <p
                      className={classes.h1}
                      style={{
                        textAlign: "center",
                        color: "#22092b",
                        fontWeight: 600,
                        fontSize: "75px",
                        margin: 0,
                      }}
                    >
                      Ready to
                    </p>

                    <p
                      // className={classes.designationStyle2}
                      className={classes.h1}
                      style={{
                        textAlign: "center",
                        color: "#FF6000",
                        fontWeight: 600,
                        fontSize: "75px",
                      }}
                    >
                      <TextTransition
                        text={TEXTS[index % TEXTS.length]}
                        springConfig={presets.wobbly}
                        inline={true}
                        noOverflow={true}
                        // delay={1000}
                      />
                      ?
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#FF6000",
                        fontSize: "20px",
                        color: "#22092b",
                        marginBottom: "40px",
                      }}
                    >
                      Drive measurable results with our innovative marketing and
                      sales strategies, <br /> backed by data. Partner with
                      Online Head Office today.
                    </p>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                      disableElevation
                      style={{
                        borderRadius: "25px",
                        padding: "15px 40px",
                        textDecoration: "none",
                      }}
                    >
                      Collaborate with us
                    </Button>
                  </div>
                </Grid>
              </div>
            </section>
          </Container>
        </div>

        <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <section
            id="Experience"
            className={classes.sectionPaddingWithoutBottom}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ background: "#202020", padding: "20px" }}
            >
              <Grid item xs={7}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{ background: "#202020" }}
                >
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "40px",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        margin: "0 0 10px 0",
                        color: "#7CD2FA",
                      }}
                    >
                      <CountUp end={10}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "'Inter', sans-serif",
                        margin: "0 0 10px 0",
                        color: "#7D838C",
                      }}
                    >
                      Years and going strong
                    </p>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "40px",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        margin: "0 0 10px 0",
                        color: "#7CD2FA",
                      }}
                    >
                      <CountUp end={100}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "'Inter', sans-serif",
                        margin: "0 0 10px 0",
                        color: "#7D838C",
                      }}
                    >
                      Happy Clients
                    </p>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "40px",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        margin: "0 0 10px 0",
                        color: "#7CD2FA",
                      }}
                    >
                      <CountUp end={500}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "'Inter', sans-serif",
                        margin: "0 0 10px 0",
                        color: "#7D838C",
                      }}
                    >
                      Completed Projects
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <div
                  style={{
                    marginLeft: "30px",
                    paddingLeft: "30px",
                    borderLeft: "1px solid #7D838C",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "'Inter', sans-serif",
                      margin: "0 0 10px 0",
                      color: "#fff",
                    }}
                  >
                    Discover the Power of Online Head Office
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "'Inter', sans-serif",
                      margin: "0 0 10px 0",
                      color: "#FF4105",
                    }}
                  >
                    Who We Are and What We Do!
                  </p>
                  <Button
                    style={{
                      color: "#7D838C",
                      fontSize: "11px",
                      textTransform: "none",
                      marginTop: "20px",
                    }}
                  >
                    <PlayCircleOutlineOutlinedIcon
                      style={{ color: "#FF4105", fontSize: "35px" }}
                    />
                    &nbsp;&nbsp; Play the video
                  </Button>
                </div>
              </Grid>
            </Grid>

            <div>
              <p className={classes.cardTitle}>
                Join the 100+ companies growing with us
              </p>
              <WhatIKnow />
            </div>
          </section>
        </Container>
        <div
          style={{
            background: "#fff6ee",
            marginTop: "60px",
            paddingBottom: "60px",
          }}
        >
          <Container
            maxWidth="xl"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <section
              id="My Works"
              className={classes.sectionPaddingWithoutBottom}
              style={{ background: "#FFE6C7" }}
            >
              <p className={classes.h2}>
                Elevate Your <span style={{ color: "#FF4105" }}>Success</span>{" "}
                with Our Services
              </p>
              <div className={classes.NotCard}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={marketing}
                          alt=""
                          className={classes.workCardImg}
                          data-aos="fade-right"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                      <Grid item xs={8} className={classes.workCardDetailSide}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Marketing
                          </p>
                        </div>
                        <p
                          className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        >
                          Accelerate your growth with our cutting-edge marketing
                          strategies, designed to reach your target audience and
                          drive sales.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={8} className={classes.workCardDetailSide2}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Sales
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Empower your team to close more deals and achieve
                          greater revenue growth with our results-driven sales
                          solutions.
                        </p>
                        <br />
                      </Grid>
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={Sales}
                          alt=""
                          className={classes.workCardImg}
                          style={{ right: "-20px", left: "auto" }}
                          data-aos="fade-left"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={ecommerce}
                          alt=""
                          className={classes.workCardImg}
                          data-aos="fade-right"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                      <Grid item xs={8} className={classes.workCardDetailSide}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Ecommerce
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Unlock the full potential of your online store with
                          our comprehensive ecommerce services, designed to
                          drive sales and provide a seamless customer
                          experience.
                        </p>
                        <br />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={8} className={classes.workCardDetailSide2}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Creative
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Stand out from the competition with our captivating
                          and innovative creative solutions, tailored to your
                          brand and designed to engage your audience.
                        </p>
                        <br />
                      </Grid>
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={creative}
                          alt=""
                          className={classes.workCardImg}
                          style={{ right: "-20px", left: "auto" }}
                          data-aos="fade-left"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={DigitalCustomerExperience}
                          alt=""
                          className={classes.workCardImg}
                          data-aos="fade-right"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                      <Grid item xs={8} className={classes.workCardDetailSide}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Digital Customer Experience
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Create lasting customer loyalty and drive repeat
                          business with our industry-leading digital customer
                          experience solutions.
                        </p>
                        <br />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={8} className={classes.workCardDetailSide2}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Software Development
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Transform your business with our custom software
                          development services, designed to optimize your
                          operations and achieve your goals.
                        </p>
                        <br />
                      </Grid>
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={softwaredevelopment}
                          alt=""
                          className={classes.workCardImg}
                          style={{ right: "-20px", left: "auto" }}
                          data-aos="fade-left"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={Consulting}
                          alt=""
                          className={classes.workCardImg}
                          data-aos="fade-right"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                      <Grid item xs={8} className={classes.workCardDetailSide}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Consulting
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Gain a competitive edge with our expert consulting
                          services, designed to help you solve problems, make
                          informed decisions, and achieve your business
                          objectives
                        </p>
                        <br />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={8} className={classes.workCardDetailSide2}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Startups
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Fuel your startup's growth and success with our
                          specialized support and resources, tailored to your
                          unique needs and goals.
                        </p>
                        <br />
                      </Grid>
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={Startups}
                          alt=""
                          className={classes.workCardImg}
                          style={{ right: "-20px", left: "auto" }}
                          data-aos="fade-left"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <Grid
                      className={classes.workCard}
                      container
                      alignItems="center"
                      data-aos="fade-zoom-in"
                    >
                      <Grid item xs={4} style={{ position: "relative" }}>
                        <img
                          src={TalentManagement}
                          alt=""
                          className={classes.workCardImg}
                          data-aos="fade-right"
                          data-aos-offset="50"
                          data-aos-easing="ease-in-sine"
                        />
                      </Grid>
                      <Grid item xs={8} className={classes.workCardDetailSide}>
                        <div className={classes.cardTitleMargin}>
                          <p className={classes.h3} style={{ fontWeight: 400 }}>
                            Talent Management
                          </p>
                        </div>
                        <p className={classes.cardDetail} style={{ margin: 0 }}>
                          Build a high-performing team and achieve your business
                          objectives with our comprehensive talent management
                          solutions, designed to attract, develop, and retain
                          top talent.
                        </p>
                        <br />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Container>
        </div>

        {/* <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            marginBottom: "60px",
          }}
        >
          <section
            id="Education"
            className={classes.sectionPaddingWithoutBottom}
          >
            <p className={classes.h2}>Education</p>
            <div className={classes.educationBox}>
              {educationData.map((item, i) =>
                i % 2 === 0 ? (
                  // <Fade left key={i} spy={reload}>
                  <div
                    className={classes.cardBox}
                    key={i}
                    data-aos="fade-right"
                  >
                 
                    <div className={classes.card}>
                      <div className={classes.cardTitleBox}>
                        <Grid
                          container
                          alignItems="center"
                          style={{ marginBottom: 24 }}
                        >
                          <Grid item xs={6}>
                            <div className={classes.cardTitleMargin}>
                              <p
                                className={classes.h3}
                                style={{ fontWeight: 400 }}
                              >
                                {" "}
                                {item.subject}
                              </p>
                            </div>
                            <p
                              className={classes.cardSubTitle}
                              style={{ margin: 0, color: "#22092b" }}
                            >
                              {item.institute}
                            </p>
                          </Grid>
                      
                        </Grid>
                      </div>
                       
                      {item.detail?.map((item, i) => (
                        <>
                          <List
                            sx={{
                              width: "100%",
                            }}
                            key={i}
                            data-aos="fade-left"
                            data-aos-delay="300"
                            // data-aos-offset="200"
                            // style={{ background: "#f9f9f9" }}
                            style={{
                              // boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                              // border: "1px solid #f9f9f9",

                              marginBottom: "5px",
                              // borderRadius: "10px",
                              padding: "0px",
                            }}
                          >
                            <ListItem style={{ padding: "0px" }}>
                              <ListItemAvatar style={{ minWidth: "0px" }}>
                             
                                <Button disabled>
                                  <StopIcon className={classes.listIcon} />
                                </Button>
                              </ListItemAvatar>
                              <ListItemText style={{ paddingRight: "10px" }}>
                                <label
                                  className={classes.cardDetail}
                                  style={{ margin: "0px" }}
                                >
                                  {item}
                                </label>
                              </ListItemText>
                            </ListItem>
                          </List>
                        </>
                      ))}
                    </div>
                  </div>
                ) : (
                  // </Fade>
                  // <Fade right key={i} spy={reload}>
                  <div className={classes.cardBox} key={i} data-aos="fade-left">
                    
                    <div className={classes.card}>
                      <div className={classes.cardTitleBox}>
                        <Grid
                          container
                          alignItems="center"
                          style={{ marginBottom: 24 }}
                        >
                          <Grid item xs={6}>
                            <div className={classes.cardTitleMargin}>
                              <p
                                className={classes.h3}
                                style={{ fontWeight: 400 }}
                              >
                                {" "}
                                {item.subject}
                              </p>
                            </div>
                            <p
                              className={classes.cardDetail}
                              style={{ margin: 0 }}
                            >
                              {" "}
                              {item.session}
                            </p>
                          </Grid>
                          <Grid item xs={6} style={{ textAlign: "right" }}>
                            <p className={classes.h5}>
                              <span style={{ color: "#AAB7B8" }}>at</span>{" "}
                              {item.institute}
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                      <p className={classes.cardDetail}>{item.detail}</p>
                    </div>
                  </div>
                  // </Fade>
                )
              )}
            </div>
          </section>
        </Container> */}

        <div
          className={classes.themeBackground}
          style={{ background: "#FF4105" }}
        >
          <Container
            maxWidth="xl"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <section
              id="Contact"
              className={classes.sectionPaddingAllSide}
              // style={{ background: "#FF4105" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  display: "inline-block",
                  letterSpacing: ".08em",
                  color: "#22092b",
                  // marginBottom: "30px",
                  backgroundColor: "#fcd408",
                  borderRadius: "0.8rem",
                  padding: "0.8rem 1.6rem",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Contact Us
              </p>
              <p
                className={classes.h1}
                style={{
                  color: "#22092b",
                  fontWeight: 600,
                  fontSize: "30px",
                  margin: "0 0 20px",
                }}
              >
                We're here to help
              </p>
              <div
                className={classes.NotCard}
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={6} sm={6}>
                    <p
                      className={`${classes.h5} ${classes.marginBottomStyle}`}
                      style={{ color: "#fff" }}
                    >
                      Mirpur DOHS, Dhaka
                    </p>
                    <p
                      className={`${classes.h5} ${classes.marginBottomStyle}`}
                      style={{ color: "#fff" }}
                    >
                      Toll Free Sales
                    </p>
                    <p
                      className={`${classes.h5} ${classes.marginBottomStyle}`}
                      style={{ color: "#fff" }}
                    >
                      +880 19 357-0402
                    </p>
                    <Grid container alignItems="center">
                      <div className={classes.iconDiv}>
                        <FacebookIcon className={classes.iconStyle} />
                      </div>
                      <div className={classes.iconDiv}>
                        <InstagramIcon className={classes.iconStyle} />
                      </div>
                      <div className={classes.iconDiv}>
                        <LinkedInIcon className={classes.iconStyle} />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    className={classes.contactButtonBox}
                    data-aos="zoom-in"
                  >
                    {/* <Fade right> */}

                    <div>
                      <a
                        className={classes.button2}
                        href="/"
                        // target="_blank"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Live Chat !
                      </a>
                    </div>
                    {/* </Fade> */}
                    <br />
                    <br />
                  </Grid>
                </Grid>
              </div>
              <br />
              <br />
              <br />

              <Email />
            </section>
          </Container>
        </div>
      </div>

      <NavbarDrawer
        openDrawer={openDrawer}
        fnActive={fnActive}
        active={active}
      />
    </div>
  );
};

export default Home;
