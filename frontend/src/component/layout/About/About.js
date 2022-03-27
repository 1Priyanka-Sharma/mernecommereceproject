import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import mypic from "../../../images/mypic.png";

const About = () => {
  const visitPortfolio = () => {
    window.location = "https://mernportfoliowebsiteheroku.herokuapp.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={mypic}
              alt="Founder"
            />
            <Typography>Priyanka Sharma</Typography>
            <Button onClick={visitPortfolio} color="primary">
              Visit My Portfolio
            </Button>
            <span>
              This is a shopping wesbite made by @priyankasharma. I love
              creating new products and exploring the possibilities.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Brands</Typography>
            <a href="https://github.com/1Priyanka-Sharma" target="blank">
              <GitHubIcon/>
              {/* <GitHubIcon className="youtubeSvgIcon" /> */}
            </a>

            <a
              href="https://www.linkedin.com/in/priyanka-sharma-56b30a1a5"
              target="blank">
              <LinkedInIcon/>
              {/* <LinkedInIcon className="instagramSvgIcon" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
