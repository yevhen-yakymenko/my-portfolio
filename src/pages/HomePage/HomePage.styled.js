import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { valueToRem } from 'utils/mixins';

export const HomePageSection = styled.section.attrs(props => ({
  className: 'section-wrapper',
}))``;

export const StyledContainer = styled.div.attrs(props => ({
  className: 'container',
}))`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContentBox = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: ${p => p.theme.space[4]};

  & > h1 {
    font-weight: 700;
    font-size: ${valueToRem(24)};
    line-height: 1.36;

    @media screen and (min-width: calc(${p =>
        p.theme.breakpoints[1]} - 0.6px)) {
      font-size: ${valueToRem(32)};
    }

    @media screen and (min-width: calc(${p =>
        p.theme.breakpoints[2]} - 0.6px)) {
      font-size: ${valueToRem(44)};
    }
  }

  & > p {
    font-family: ${p => p.theme.fonts.secondary};

    :first-child {
      font-weight: ${p => p.theme.fontWeights.medium};
      font-size: 12px;
      line-height: 1.2;

      letter-spacing: 0.1em;
      text-transform: uppercase;

      color: ${p => p.theme.colors.heading};
    }

    :nth-child(3) {
      font-size: 16px;
      line-height: 2;
      letter-spacing: 0.03em;
    }
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    padding-left: ${p => p.theme.space[5]};
    padding-right: ${p => p.theme.space[5]};
  }
`;

export const MediaBox = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

export const ContentLink = styled(NavLink)`
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};

  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.textAccent};
  border-radius: ${p => p.theme.radii[0]};

  opacity: 0.4;
  z-index: 1;
  transition: opacity ${p => p.theme.transitions.main};

  :hover {
    opacity: 1;
  }
`;
