import React from "react";
import { skills } from "../../Data/Constants";
import {
  Container,
  Wrapper,
  Desc,
  Title,
  Skill,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  SkillImage,
} from "./SkillStyledComponent";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills i have been working on for the past 2 years
        </Desc>
        <SkillsContainer>
          {skills.map((item, index) => (
            <Skill key={index}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
