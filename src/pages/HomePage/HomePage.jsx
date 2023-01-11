import img from 'images/1x3.jpg';

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
                I focus on HTML5, CSS3, JS, React. Development, practice and
                work for the result are important for me. I am skillful in
                analyzing problems and thinking of solutions to accurately
                troubleshoot and solve technical problems.
              </p>
              <ReadMoreLink
                to={'about'}
                aria-label="link to information about me"
              >
                Read more
              </ReadMoreLink>
            </TextWrapper>

            <ContentLink
              href="https://drive.google.com/file/d/1p12Q_uOoU2xJmRsASH6aLukazPNwck71/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to download my resume"
            >
              Download Resume
            </ContentLink>
          </ContentBox>
          <MediaBox>
            <ImgWrapper>
              <img src={img} alt="I" width="400px" />
            </ImgWrapper>
          </MediaBox>
        </AboutBlock>
      </StyledContainer>
    </HomePageSection>
  );
};

export default HomePage;
