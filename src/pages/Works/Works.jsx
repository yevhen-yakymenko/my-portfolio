import React from 'react';
import { IoGlobeOutline, IoLogoGithub } from 'react-icons/io5';

import works from 'data/works.json';

import {
  WorksSection,
  StyledContainer,
  WorksLict,
  WorksItem,
  ImgBox,
  TextBox,
  StackText,
  LinksList,
} from './Works.styled';

const Works = () => {
  return (
    <WorksSection>
      <StyledContainer>
        <h1>Works</h1>
        <WorksLict>
          {works.map(({ id, title, description, stack, preview, links }) => (
            <WorksItem key={id}>
              <ImgBox>
                <a href={links.site} target="_blank" rel="noopener noreferrer">
                  <img src={preview} alt={title} width="450px" />
                </a>
              </ImgBox>
              <TextBox>
                <h2>{title}</h2>
                <StackText>[ {stack.join(', ')} ]</StackText>
                <p>{description}</p>
                <LinksList>
                  <a
                    href={links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <IoGlobeOutline />
                    </span>
                  </a>
                  <a
                    href={links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-label="GitHub link to repository">
                      <IoLogoGithub />
                    </span>
                  </a>
                </LinksList>
              </TextBox>
            </WorksItem>
          ))}
        </WorksLict>
      </StyledContainer>
    </WorksSection>
  );
};

export default Works;
