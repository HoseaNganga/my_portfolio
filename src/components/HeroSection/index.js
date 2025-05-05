import React,{useEffect,useState} from "react";
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

const getArticle=(role)=>{
  const firstChar=role.trim()[0].toLowerCase();
  const vowels=["a","e","i","o","u"];
  return vowels.includes(firstChar)?"an":"a"
}



const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % Bio.roles?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              I am {article}{" "}
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
