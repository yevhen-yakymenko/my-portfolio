import React from 'react';

import about from 'data/about.json';

import {
  AboutSection,
  StyledContainer,
  // NavBlock,
  // LinksList,
  AboutBlock,
  AboutList,
  // AboutItem,
  TextBox,
  ImgBox,
} from './About.styled';

const About = () => {
  return (
    <AboutSection>
      <StyledContainer>
        {/* <NavBlock>
          <LinksList>
            <li>
              <a href="#about">
                A little about myself and how I became a web developer
              </a>
            </li>
            <li>
              <a href="#education-work">Education and work experience</a>
            </li>
            <li>
              <a href="#studying">Studying at an IT school and my skills</a>
            </li>
            <li>
              <a href="#qualities">My qualities</a>
            </li>
            <li>
              <a href="#hobbies">Hobbies and recreation</a>
            </li>
            <li>
              <a href="#final-word">Final word</a>
            </li>
          </LinksList>
        </NavBlock> */}
        <AboutBlock>
          <h1>
            A little about myself <br />
            and how I became a web developer
          </h1>
          <AboutList>
            {about.map(({ id, title, text, img }) => (
              <li key={id} id={id}>
                <TextBox>
                  <h2>{title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </TextBox>
                <ImgBox>
                  <div>
                    <img src={img} alt={id} width="240px" />
                  </div>
                </ImgBox>
              </li>
            ))}
          </AboutList>
        </AboutBlock>
      </StyledContainer>
    </AboutSection>
  );
};

export default About;
