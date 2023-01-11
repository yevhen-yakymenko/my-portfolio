import styled from 'styled-components';

export const NavWrapper = styled.div.attrs(_ => ({
  className: 'nav-bloc',
}))`
  display: flex;

  &.menu--open {
    transform: translateX(0);
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    position: fixed;
    right: 0;
    padding-top: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};
    width: 320px;
    height: 100vh;

    background-color: ${p => p.theme.colors.backgroundPrimary};
    border-bottom: 2px solid ${p => p.theme.colors.textSecondary};

    overflow-y: scroll;

    z-index: 5;

    transform: translateX(100%);

    transition: transform ${p => p.theme.transitions.main};
  }

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    width: 100vw;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    flex: 1 1;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[3]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: ${p => p.theme.space[3]};
  }
`;
