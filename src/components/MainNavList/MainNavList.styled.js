import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    flex-direction: column;
    width: 100%;

    & > li {
      border-bottom: 1px solid #e0e0e0;
      width: 100%;
    }
  }

  @media screen and (min-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    margin-left: auto;
    gap: ${p => p.theme.space[4]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: auto;
    gap: ${p => p.theme.space[5]};
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: 1.45;
  color: ${p => p.theme.colors.textDark};

  transition: color ${p => p.theme.transitions.main};

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    text-align: center;
    width: 100%;
  }

  & > span {
    position: relative;
    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[1]} - 0.6px)) {
      display: inline-flex;
    }
  }

  & > span::after {
    position: absolute;

    display: block;
    width: 100%;
    height: 2px;

    content: '';

    border-radius: 1px;

    background-color: ${p => p.theme.colors.textAccent};

    transform: scaleX(0);

    transition: transform ${p => p.theme.transitions.main};

    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints[1]} - 0.6px)) {
      bottom: 0;
    }
  }

  &.active {
    color: ${p => p.theme.colors.textAccent};

    & > span::after {
      transform: scaleX(1);
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.textLight};
  }
`;
