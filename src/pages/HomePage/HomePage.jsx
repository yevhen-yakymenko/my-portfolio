// import img from 'images/1x3.jpg';

import {
  HomePageSection,
  StyledContainer,
  AboutBlock,
  ContentBox,
  TextWrapper,
  ReadMoreLink,
  ContentLink,
  MediaBox,
  ImgWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <StyledContainer>
        <AboutBlock>
          <ContentBox>
            <h1>
              Hi, I am Yevhen,
              <br />
              Front-end Developer
            </h1>
            <TextWrapper>
              <p>
                My skills are:
                <br />
                GIT, HTML5, CSS3, SASS, REST API, JavaScript, React, React
                Hooks, React Router, Redux, Styled Components.
                <br />
                Development, practice and work for the result are important for
                me.
                <br />I am skillful in analyzing problems and thinking of
                solutions to accurately troubleshoot and solve technical
                problems.
              </p>
              <ReadMoreLink
                to={'about'}
                aria-label="link to information about me"
              >
                Read more
              </ReadMoreLink>
            </TextWrapper>

            <ContentLink
              href="https://drive.google.com/file/d/1lkFtBhac7dxC3HFfwzwTOUgLHCUDCT-g/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to download my resume"
            >
              Download Resume
            </ContentLink>
          </ContentBox>
          <MediaBox>
            <ImgWrapper>
              <img
                src="https://res.cloudinary.com/djjgaui2x/image/upload/v1674159865/my-portfolio/home-page/1x3_euzh9w.jpg"
                alt="I"
                width="400px"
                loading="lazy"
              />
            </ImgWrapper>
          </MediaBox>
        </AboutBlock>
      </StyledContainer>
    </HomePageSection>
  );
};

export default HomePage;
