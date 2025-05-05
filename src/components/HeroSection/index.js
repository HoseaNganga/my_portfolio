import React from "react";
import { Bio } from "../../Data/Constants";
import Typewriter from "typewriter-effect";
import HeroImage from "../../images/profilepic.JPG";
import HeroBgAnimation from "../../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  TextLoop,
  Span,
  Title,
  SubTitle,
  ResumeButton,
} from "./HeroStyledComponent";





const HeroSection = () => {

  const currentRole = Bio.roles[currentRoleIndex];
  const article = getArticle(currentRole);
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am {" "}
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="blank">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={HeroImage} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
