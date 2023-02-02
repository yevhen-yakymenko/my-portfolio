import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoSkype } from 'react-icons/io5';
import { FaTelegram } from 'react-icons/fa';

import {
  ContactSection,
  StyledContainer,
  ContactWrapper,
  LinksBox,
  LinksList,
} from './Contact.styled';

const Contacts = () => {
  return (
    <ContactSection>
      <StyledContainer>
        <h1>Contacts</h1>
        <ContactWrapper>
          <img
            src="https://res.cloudinary.com/djjgaui2x/image/upload/v1675365578/my-portfolio/ukraine_gd5agi.svg"
            alt="ukraine flag"
            width="100px"
          />
          <p>
            Feel free to write to me on any social network. <br />I will be
            happy to help and work with you.
          </p>
          <LinksBox>
            <a href="mailto:yevhen.yakymenko.fed@gmail.com">
              yevhen.yakymenko.fed@gmail.com
            </a>
            <LinksList>
              <li>
                <a
                  href="https://www.linkedin.com/in/yevhen-yakymenko-fed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to linkedin"
                >
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yevhen-yakymenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to github"
                >
                  <IoLogoGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://join.skype.com/invite/cMyc8uoikNz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to skype"
                >
                  <IoLogoSkype />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/yevhen_fed"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to telegram"
                >
                  <FaTelegram />
                </a>
              </li>
            </LinksList>
          </LinksBox>
        </ContactWrapper>
      </StyledContainer>
    </ContactSection>
  );
};

export default Contacts;
