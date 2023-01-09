import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import { valueToRem } from 'utils/mixins';

export const NavList = styled.ul`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]};
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};

  position: relative;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: 1.45;
  color: ${p => p.theme.colors.textDark};

  transition: color ${p => p.theme.transitions.main};

  &::after {
    position: absolute;

    display: block;
    width: 100%;
    height: 2px;

    content: '';

    border-radius: 1px;

    background-color: ${p => p.theme.colors.textAccent};

    transform: scaleX(0);

    transition: transform ${p => p.theme.transitions.main};
  }

  &.active {
    color: ${p => p.theme.colors.textAccent};

    &::after {
      transform: scaleX(1);
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.textLight};
  }
`;
