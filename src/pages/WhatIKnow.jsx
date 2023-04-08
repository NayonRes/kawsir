import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bootstrap from "../assets/images/bootstrap.png";
import CSharp from "../assets/images/CSharp.png";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import dotnet from "../assets/images/dotnet.jpg";
import javascript from "../assets/images/javascript.png";
import mssql from "../assets/images/mssql.png";
import material from "../assets/images/material.png";
import reactjs from "../assets/images/reactjs.png";
import visualstudio from "../assets/images/visualstudio.png";
import MSVisualStudioCode from "../assets/images/MSVisualStudioCode.png";
import AppleGadgets from "../assets/client-logos/AppleGadgets.png";
import BangladeshAirForce from "../assets/client-logos/BangladeshAirForce.png";
import CDVision from "../assets/client-logos/CDVision.png";
import ChitronInterior from "../assets/client-logos/ChitronInterior.png";
import HashtagPizza from "../assets/client-logos/HashtagPizza.png";
import InBs from "../assets/client-logos/InBs.png";
import NaveedMahbub from "../assets/client-logos/NaveedMahbub.png";
import OceanAngelFreight from "../assets/client-logos/OceanAngelFreight.png";
import RahimSteel from "../assets/client-logos/RahimSteel.png";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "120px",
    margin: "10px auto",
    background: "#fff",
    padding: "10px 5px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
    },
  },
  cardTitle: {
    fontSize: "12px",
    margin: "16px 0 0 0",
    color: "#061A38",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
  },
  cardImage: {
    width: "110px",
    height: "110px",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      height: "20px",
    },
  },
}));

const WhatIKnow = () => {
  const classes = useStyles();
  const data = [
    { img: AppleGadgets, name: "HTML 5" },
    { img: BangladeshAirForce, name: "CSS 3" },
    { img: CDVision, name: ".NET" },
    { img: ChitronInterior, name: "JavaScript" },
    { img: HashtagPizza, name: "MS SQL Server" },
    { img: InBs, name: "Material-UI" },
    { img: NaveedMahbub, name: "React JS" },
    { img: OceanAngelFreight, name: "MS Visual Studio" },
    { img: RahimSteel, name: "Visual Studio Code" },
  ];
  const settings = {
    className: "center",
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 1500,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          // centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i}>
            <div className={classes.card}>
              <img src={item.img} alt="" className={classes.cardImage} />
              {/* <p className={classes.cardTitle}>{item.name}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatIKnow;
