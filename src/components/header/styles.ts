import styled from "styled-components";

export const Container = styled.header`
  display: flex;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;

  height: 3.875rem;

  justify-content: space-between;

  width: 100%;
  margin: 0 auto;

  max-width: 18.25rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    height: 4.125rem;
    max-width: 95%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 95%;
    height: 4.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 6.375rem;

    max-width: 77.25rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandImage = styled.div`
  position: relative;

  height: auto;

  margin-top: 0.9375rem;
`;

export const SignUpButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  font-family: ${(props) => props.theme.fonts.secondary};

  color: ${(props) => props.theme.colors.text.secondary};
  background-color: ${(props) => props.theme.colors.brand};

  height: 1.5625rem;

  padding: 0 0.875rem;

  text-align: center;
  font-size: 0.6875rem;
  font-weight: 800;
  line-height: 0.8125rem;
  letter-spacing: 0.82px;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    font-size: 1rem;
    letter-spacing: 0.025rem;
    height: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 1rem;
    letter-spacing: 0.025rem;
    height: 2.25rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 2.5625rem;

    padding: 0 1.25rem;

    font-size: 1.0625rem;
    line-height: 1.25rem;

    text-align: center;
    letter-spacing: 1.275px;
  }
`;

export const HeaderNav = styled.nav`
  display: none;

  margin-right: 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: block;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-right: 1.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-right: 1.5rem;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;

  > li + li {
    margin-left: 0.6875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    > li + li {
      margin-left: 1.375rem;
    }
  }
`;

export const HeaderNavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  font-family: ${(props) => props.theme.fonts.secondary};

  font-weight: 800;
  font-size: 0.6875rem;
  line-height: 0.8125rem;
  letter-spacing: 0.825px;

  height: 1.4375rem;

  padding: 0 0.2rem;

  border-bottom: 3px solid ${(props) => props.theme.colors.brand};

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 2.0625rem;
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 1.0625rem;
    line-height: 1.25rem;

    padding: 0 0.5rem;

    height: 2.375rem;

    letter-spacing: 1.275px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
