import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons,
  Copyright,
} from "./FooterStyledComponent";
import { Bio } from "../../Data/Constants";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Hosea Nganga</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.youtube} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Hosea Nganga. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
