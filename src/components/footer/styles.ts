import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 2.9375rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 4.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 4.9375rem;
  }
`;

export const InnerSection = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 100%;

  max-width: 18rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    max-width: 95%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 44.4375rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 85%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 68rem;
  }
`;

export const Header = styled.div`
  flex: 1;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    max-width: 12.125rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 15.125rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
  width: 100%;

  > div {
    flex: 1 0 50%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex: 1;

    > div {
      flex: 50%;
    }
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;

  > nav + nav {
    margin-top: 0.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;

    > nav {
      flex: 50%;
    }

    > nav + nav {
      margin-top: 0;
    }
  }
`;

export const FooterDivider = styled.hr`
  margin: 1.4375rem 0;
  border-color: ${(props) => props.theme.colors.shape};

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    margin: 3rem 0 1.5625rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    border-width: 1px;
  }
`;

export const FooterCpyRight = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0.5rem;
  font-family: "Raleway";

  margin-bottom: 3.1875rem;

  font-size: 0.5625rem;
  line-height: 1.1875rem;

  > * + * {
    margin-top: 0.875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;

    justify-content: space-between;

    width: 100%;
    max-width: 37.5rem;

    margin-left: auto;
    margin-right: auto;

    > * + * {
      margin: 0;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 0.8rem;
    line-height: 1rem;

    max-width: 56.25rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 0.9375rem;
    line-height: 1.125rem;

    max-width: 60.5rem;
  }
`;

export const FooterCpyRightText = styled.p`
  font-weight: 700;
  max-width: 11.625rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    max-width: fit-content;
  }
`;

export const FooterTerms = styled.ul`
  display: flex;
  flex-direction: column;

  > li + li {
    margin-top: 9px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;
    > li + li {
      margin: 0;
      margin-left: 1.875rem;
    }
  }
`;

export const FooterTermsLink = styled.a`
  font-family: inherit;
  font-weight: 700;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 38.25rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 56rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 59rem;
  }
`;
