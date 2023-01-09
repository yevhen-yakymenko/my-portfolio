import img from 'images/1x3.jpg';

import {
  HomePageSection,
  StyledContainer,
  ContentBox,
  ContentLink,
  MediaBox,
  ImgWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <StyledContainer>
        <ContentBox>
          <h1>
            Hi, I am Yevhen,
            <br />
            Frontend Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            corrupti cumque ut! Sapiente placeat eveniet optio eum velit iste
            nulla! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Iusto, porro?
          </p>
          <p>Read more</p>
          <ContentLink to={'login'} aria-label="link to log in page">
            Download Resume
          </ContentLink>
        </ContentBox>
        <MediaBox>
          <ImgWrapper>
            <img src={img} alt="img" width="400px" />
          </ImgWrapper>
        </MediaBox>
      </StyledContainer>
    </HomePageSection>
  );
};

export default HomePage;
