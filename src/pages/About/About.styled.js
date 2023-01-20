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

//   padding-top: ${p => p.theme.space[3]};
//   padding-bottom: ${p => p.theme.space[3]};
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
  padding: ${p => p.theme.space[3]};

  border-radius: ${p => p.theme.radii[0]};

  background-color: ${p => p.theme.colors.backgroundPrimary};
  box-shadow: 0rem 0.25rem 0.625rem rgba(187, 225, 250, 0.25);

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: ${p => p.theme.space[4]};
  }

  & > h1 {
    margin-bottom: ${p => p.theme.space[3]};
    font-size: ${p => p.theme.fontSizes[6]};
    line-height: 1.36;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      margin-bottom: ${p => p.theme.space[4]};
      font-size: ${p => p.theme.fontSizes[7]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      margin-left: ${p => p.theme.space[4]};
      font-size: ${p => p.theme.fontSizes[8]};
    }
  }
`;

export const AboutList = styled.ul`
  margin-top: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[3]};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: ${p => p.theme.space[4]};
  }

  & > li {
    padding-bottom: ${p => p.theme.space[3]};

    border-bottom: 0.0625rem solid #e0e0e0;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      padding-bottom: ${p => p.theme.space[4]};
      display: flex;
      align-items: center;
      gap: ${p => p.theme.space[4]};

      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      padding-left: ${p => p.theme.space[4]};
      padding-right: ${p => p.theme.space[4]};
    }
  }
`;

// export const AboutItem = styled.li``;

export const TextBox = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    flex: 1 1 60%;
  }

  & > h2 {
    margin-bottom: ${p => p.theme.space[3]};

    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 1.5;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[6]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[7]};
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
    border-radius: ${p => p.theme.radii[0]};
    overflow: hidden;

    & > img {
      min-height: 8.125rem;
    }
  }
`;
