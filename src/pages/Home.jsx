import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Consulting from "../assets/client-logos/Consulting.svg";
import creative from "../assets/client-logos/creative.svg";
import DigitalCustomerExperience from "../assets/client-logos/DigitalCustomerExperience2.svg";
import ecommerce from "../assets/client-logos/ecommerce.svg";
import marketing from "../assets/client-logos/marketing2.svg";
import Sales from "../assets/client-logos/Sales.svg";
import softwaredevelopment from "../assets/client-logos/softwaredevelopment.svg";
import Startups from "../assets/client-logos/Startups.svg";
import TalentManagement from "../assets/client-logos/TalentManagement.svg";
import logo from "../assets/client-logos/logo.svg";
import skill from "../assets/images/skill.png";
import education from "../assets/images/education.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarDrawer from "./NavbarDrawer";
import WhatIKnow from "./WhatIKnow";
import TextTransition, { presets } from "react-text-transition";
import AOS from "aos";
import "aos/dist/aos.css";
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
    fontFamily: "'Inter', sans-serif",

    margin: "0 0 20px 0",

    textAlign: "center",
    color: "#22092b",
    fontWeight: 600,
    fontSize: "75px",
    // lineHeight: "150px",

    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   // lineHeight: "65px",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      // lineHeight: "35px",
      textAlign: "center",
    },
  },
  title: {
    fontFamily: "'Inter', sans-serif",

    fontWeight: 600,
    fontSize: "36px",
    margin: "0 0 30px",
    // lineHeight: "150px",

    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   // lineHeight: "65px",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      // lineHeight: "35px",
      textAlign: "center",
    },
  },
  title2: {
    fontFamily: "'Inter', sans-serif",

    fontWeight: 600,
    fontSize: "18px",
    margin: "0 0 20px",
    // lineHeight: "150px",

    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   // lineHeight: "65px",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      // lineHeight: "35px",
      textAlign: "center",
    },
  },
  title3: {
    fontSize: "12px",
    fontWeight: 800,
    display: "inline-block",
    letterSpacing: ".08em",
    color: "#22092b",
    marginBottom: "30px",
    backgroundColor: "#fcd408",
    borderRadius: "0.8rem",
    padding: "0.8rem 1.6rem",
    fontFamily: "'Inter', sans-serif",
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
    fontSize: "22px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
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

  cardTitle: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: "50px 0px",
    color: "#061A38",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      margin: "30px 0px",
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
    // border: "20px solid #FA4105",
    padding: "10px 35px",
    borderRadius: "50px",
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    cursor: "pointer",
    background: "#22092b",
    display: "inline-block",
    textDecoration: "none",
    color: "#fff",
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
    margin: "0 5px",
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
      padding: "50px 100px",
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
  sectionPaddingWithoutBottom2: {
    padding: "50px 50px 0 50px",
    [theme.breakpoints.down("xl")]: {
      padding: "50px 200px 0 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "50px 50px 0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px 50px 20px",
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

  marginBottomStyle: {
    marginBottom: "20px",
    [theme.breakpoints.down("xl")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "12px",
    },
  },
  marginBottomStyle2: {
    textAlign: "center",
    marginBottom: "70px",

    [theme.breakpoints.down("md")]: {
      marginBottom: "45px",
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

  homeInfoBox: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "70px",
    },
  },

  clientNo: {
    fontSize: "40px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    margin: "0 0 10px 0",
    color: "#FF4105",
    [theme.breakpoints.down("lg")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
  clientTitle: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    margin: "0 0 10px 0",
    color: "#7D838C",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
  },
  cardRight: {
    marginLeft: "30px",
    paddingLeft: "30px",
    borderLeft: "1px solid #7D838C",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      marginLeft: "0px",
      paddingLeft: "0px",
      borderLeft: "0px solid #7D838C",
    },
  },
  containerStyle: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Home");
  const [reload, setReload] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isVisible, setVisibility] = useState(false);
  const [entered, setEntered] = useState(false);
  const [index, setIndex] = useState(0);
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
  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };
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
    if (id === "CONTACT") {
      setTimeout(() => {
        setActive(id);
      }, 1500);
    }
  };

  const hideIcon = () => {
    document.getElementById("myIcon").style.display = "block";
  };
  const ShowIcon = () => {
    document.getElementById("myIcon").style.display = "none";
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

  function openNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

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
                <Grid item onClick={() => fnActive("Home")}>
                  <img src={logo} alt="" height="70px" />
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
                  <h4 className={`${classes.menuItem}`}>HOME</h4>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "CLIENTS" ? classes.active : null
                  }`}
                  onClick={() => fnActive("CLIENTS")}
                >
                  <p className={classes.menuItem}>CLIENTS</p>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "SERVICES" ? classes.active : null
                  }`}
                  onClick={() => fnActive("SERVICES")}
                >
                  <p className={classes.menuItem}>SERVICES</p>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "CONTACT" ? classes.active : null
                  }`}
                  onClick={() => fnActive("CONTACT")}
                >
                  <p className={classes.menuItem}>CONTACT</p>
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
                    <p className={classes.title3}>
                      #TOP-RATED SALES ENABLEMENT PLATFORM
                    </p>
                    <p
                      className={classes.h1}
                      style={{
                        margin: 0,
                      }}
                    >
                      Ready to
                    </p>

                    <p
                      // className={classes.designationStyle2}
                      className={classes.h1}
                      style={{
                        color: "#FF6000",
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
                      sales strategies,{" "}
                      <br className={classes.ForOtherVersion} /> backed by data.
                      Partner with Online Head Office today.
                    </p>
                    <Button
                      endIcon={
                        <ArrowForwardIcon
                          id="myIcon"
                          style={{ display: "none" }}
                        />
                      }
                      variant="contained"
                      disableElevation
                      style={{
                        borderRadius: "25px",
                        padding: "15px 40px",
                        textDecoration: "none",
                        textTransform: "none",
                        transition: "1s",
                      }}
                      onMouseEnter={hideIcon}
                      onMouseLeave={ShowIcon}
                      onClick={() =>
                        openNewTab("https://calendly.com/kowserahmed/15min")
                      }
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
          <section id="CLIENTS" className={classes.sectionPaddingWithoutBottom}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ background: "#202020", padding: "20px" }}
            >
              <Grid item sm={12} md={7}>
                <Grid
                  container
                  justifyContent="center"
                  // alignItems="center"
                  style={{ background: "#202020" }}
                >
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <p className={classes.clientNo}>
                      <CountUp end={10}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </p>
                    <p className={classes.clientTitle}>
                      Years and going strong
                    </p>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <p className={classes.clientNo}>
                      <CountUp end={100}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </p>
                    <p className={classes.clientTitle}>Happy Clients</p>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <p className={classes.clientNo}>
                      <CountUp end={500}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </p>
                    <p className={classes.clientTitle}>Completed Projects</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={5}>
                <div className={classes.cardRight}>
                  <p
                    style={{
                      margin: "0 0 10px 0",
                      color: "#fff",
                    }}
                    className={classes.clientTitle}
                  >
                    Discover the Power of Online Head Office
                  </p>
                  <p
                    style={{
                      margin: "0 0 10px 0",
                      color: "#FF4105",
                    }}
                    className={classes.clientTitle}
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
                Join the <span style={{ color: "#FF4105" }}>100+</span>{" "}
                companies growing with us
              </p>
              <WhatIKnow />
            </div>
          </section>
        </Container>
        <div
          style={{
            background: "#fff6ee",
            marginTop: "60px",
          }}
        >
          <Container
            maxWidth="xl"
            style={{}}
            className={classes.containerStyle}
          >
            <section
              id="SERVICES"
              className={classes.sectionPaddingWithoutBottom2}
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
            <section id="CONTACT" className={classes.sectionPaddingAllSide}>
              <div className={classes.NotCard} style={{ textAlign: "center" }}>
                <div>
                  <p className={classes.title}>WE ARE HERE TO HELP!</p>
                  <p className={classes.title2}>
                    Book a free 15-minute consultation with us
                  </p>
                  <div className={classes.marginBottomStyle2}>
                    <a
                      className={classes.button2}
                      href="https://calendly.com/kowserahmed/15min"
                      target="_blank"
                    >
                      BOOK NOW
                    </a>
                  </div>
                  <div>
                    <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                      <b> Online Head Office:</b>
                      <br />
                      House #13, Road #02, Avenue #11,
                      <br /> Mirpur DOHS, Dhaka-1216.
                    </p>

                    <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                      <b> Toll Free Call:</b>
                      <br />
                      +8801882273753
                    </p>

                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        width: "190px",
                        padding: "12px",
                        margin: "auto",
                        background: "#fa4105",
                      }}
                    >
                      <div className={classes.iconDiv}>
                        <FacebookIcon className={classes.iconStyle} />
                      </div>
                      <div className={classes.iconDiv}>
                        <InstagramIcon className={classes.iconStyle} />
                      </div>
                      <div
                        className={classes.iconDiv}
                        onClick={() =>
                          openNewTab(
                            "https://linkedin.com/company/onlineheadofficebd"
                          )
                        }
                      >
                        <LinkedInIcon className={classes.iconStyle} />
                      </div>
                    </Grid>
                  </div>
                </div>
              </div>
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
