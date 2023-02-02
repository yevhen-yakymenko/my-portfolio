import styled from 'styled-components';

export const ContactSection = styled.section.attrs(_ => ({
  className: 'section-wrapper',
}))``;

export const StyledContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  padding: 0 ${p => p.theme.space[3]};

  & > h1 {
    margin-bottom: ${p => p.theme.space[3]};
    font-size: ${p => p.theme.fontSizes[6]};

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[7]};
      margin-bottom: ${p => p.theme.space[4]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[9]};
    }
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]};

  & > p {
    font-size: ${p => p.theme.fontSizes[5]};

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[6]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[7]};
    }
  }
`;

export const LinksBox = styled.div`
  & > a {
    display: block;
    margin-bottom: ${p => p.theme.space[3]};
    font-size: ${p => p.theme.fontSizes[4]};
    color: inherit;

    transition: color ${p => p.theme.transitions.main};

    &:hover {
      color: ${p => p.theme.colors.textAccent};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[5]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[6]};
    }
  }
`;

export const LinksList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]};

  & a {
    font-size: ${p => p.theme.fontSizes[6]};
    color: ${p => p.theme.colors.text};

    transition: color ${p => p.theme.transitions.main};

    &:hover {
      color: ${p => p.theme.colors.textAccent};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[7]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[8]};
    }
  }
`;
