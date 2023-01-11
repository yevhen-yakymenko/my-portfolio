import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageSection = styled.section.attrs(props => ({
  className: 'section-wrapper',
}))``;

export const StyledContainer = styled.div.attrs(props => ({
  className: 'container',
}))`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutBlock = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[2]} - 0.6px)) {
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: space-around;
    gap: ${p => p.theme.space[3]};
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]};

  @media screen and (max-width: calc(${p => p.theme.breakpoints[2]} - 0.6px)) {
    order: 2;
  }

  @media screen and (min-width: ${p =>
      p.theme.breakpoints[0]}) and (max-width: calc(${p =>
      p.theme.breakpoints[2]} - 0.6px)) {
    gap: 3rem;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    padding-left: ${p => p.theme.space[4]};
    padding-right: ${p => p.theme.space[4]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-left: ${p => p.theme.space[5]};
    padding-right: ${p => p.theme.space[5]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    flex: 1 1 100%;
  }

  & > h1 {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[6]};
    line-height: 1.36;

    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[0]} - 0.6px)) {
      align-self: flex-start;
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: 2.75rem;
    }
  }

  & > p {
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: 1.5;
    text-align: justify;

    @media screen and (min-width: ${p =>
        p.theme.breakpoints[0]}) and (max-width: calc(${p =>
        p.theme.breakpoints[2]} - 0.6px)) {
      font-size: ${p => p.theme.fontSizes[5]};
    }
  }
`;

export const ReadMoreLink = styled(NavLink)`
  display: block;
  text-align: right;
  color: ${p => p.theme.colors.textSecondary}; ;
`;

export const ContentLink = styled.a`
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};
  align-self: flex-start;

  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.textAccent};
  border-radius: ${p => p.theme.radii[0]};

  opacity: 0.4;
  z-index: 1;
  transition: opacity ${p => p.theme.transitions.main};

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    align-self: center;
  }

  @media screen and (min-width: calc(${p =>
      p.theme.breakpoints[0]} - 0.6px)) and (max-width: calc(${p =>
      p.theme.breakpoints[2]} - 0.6px)) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const MediaBox = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[2]} - 0.6px)) {
    order: 1;
  }

  @media screen and (min-width: calc(${p => p.theme.breakpoints[2]} - 0.6px)) {
    flex: 1 1 100%;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    width: 200px;
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    width: 300px;
  }
`;
