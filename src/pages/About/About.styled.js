import styled from 'styled-components';

export const AboutSection = styled.section.attrs(props => ({
  className: 'section-wrapper',
}))`
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const StyledContainer = styled.div.attrs(props => ({
  className: 'container',
}))`
  position: relative;
  display: flex;
`;

// export const NavBlock = styled.div`
//   max-width: 15%;
//   height: 50%;
//   position: fixed;

//   padding-top: 16px;
//   padding-bottom: 16px;
//   padding-left: 8px;
//   padding-right: 8px;

//   border-radius: 8px;

//   background-color: ${p => p.theme.colors.backgroundPrimary};
//   box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
// `;

// export const LinksList = styled.ul`
//   display: flex;
//   flex-direction: column;
// `;

export const AboutBlock = styled.div`
  padding: 16px;

  border-radius: 8px;

  background-color: ${p => p.theme.colors.backgroundPrimary};
  box-shadow: 0rem 0.25rem 0.625rem rgba(187, 225, 250, 0.25);

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 32px;
  }

  & > h1 {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.36;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      margin-bottom: 32px;
      font-size: 32px;
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      margin-left: 32px;
      font-size: 48px;
    }
  }
`;

export const AboutList = styled.ul`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 32px;
  }

  & > li {
    padding-bottom: 16px;

    border-bottom: 0.0625rem solid #e0e0e0;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      padding-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 32px;

      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;

// export const AboutItem = styled.li``;

export const TextBox = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    flex: 1 1 60%;
  }

  & > h2 {
    margin-bottom: 16px;

    font-size: 20px;
    line-height: 1.5;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: 24px;
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: 32px;
    }
  }

  & > p {
    line-height: 1.5;
    text-align: justify;
  }
`;

export const ImgBox = styled.div`
  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    display: none;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    flex: 1 1 40%;
  }

  & > div {
    margin: 0 auto;
    max-width: max-content;
    border: 0.0625rem solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
  }
`;
