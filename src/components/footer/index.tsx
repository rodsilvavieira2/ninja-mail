import Image from "next/image";

import logo from "../../../public/logo.svg";
import { FooterGroup } from "./footer-group";
import {
  Container,
  Header,
  FooterLinks,
  LinksGroup,
  FooterDivider,
  FooterCpyRight,
  FooterCpyRightText,
  FooterTerms,
  FooterTermsLink,
  NavWrapper,
  InnerSection,
} from "./styles";

const footerLinks = {
  features: {
    title: "Features",
    items: [
      {
        id: 1,
        label: "Pricing",
        link: "/",
      },
      {
        id: 2,
        label: "Services",
        link: "/",
      },
      {
        id: 3,
        label: "Partners",
        link: "/",
      },
    ],
  },
  aboutUs: {
    title: "About US",
    items: [
      {
        id: 1,
        label: "Tutorials",
        link: "/",
      },
      {
        id: 2,
        label: "Resources",
        link: "/",
      },
      {
        id: 3,
        label: "Help Center",
        link: "/",
      },
      {
        id: 4,
        label: "Templates",
        link: "/",
      },
      {
        id: 5,
        label: "Case Studies",
        link: "/",
      },
    ],
  },
  medium: {
    title: "Medium",
    items: [
      {
        id: 1,
        label: "Twitter",
        link: "/",
      },
      {
        id: 2,
        label: "Facebook",
        link: "/",
      },
      {
        id: 3,
        label: "Instagram",
        link: "/",
      },
      {
        id: 4,
        label: "Linkedln",
        link: "/",
      },
    ],
  },
  contactUs: {
    title: "Contact Us",
    items: [
      {
        id: 1,
        label: "Slack",
        link: "/",
      },
      {
        id: 2,
        label: "Jobs",
        link: "/",
      },
    ],
  },
};

export const Footer = () => {
  return (
    <Container>
      <InnerSection>
        <NavWrapper>
          <Header>
            <Image src={logo} alt="NinjaMail" />
          </Header>

          <FooterLinks>
            <LinksGroup>
              <FooterGroup {...footerLinks.features} />

              <FooterGroup {...footerLinks.aboutUs} />
            </LinksGroup>

            <LinksGroup>
              <FooterGroup {...footerLinks.medium} />

              <FooterGroup {...footerLinks.contactUs} />
            </LinksGroup>
          </FooterLinks>
        </NavWrapper>

        <FooterDivider />

        <FooterCpyRight>
          <FooterCpyRightText>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </FooterCpyRightText>

          <FooterTerms>
            <li>
              <FooterTermsLink href="/">Terms & Conditions</FooterTermsLink>
            </li>

            <li>
              <FooterTermsLink href="/">Privacy Policy</FooterTermsLink>
            </li>
          </FooterTerms>
        </FooterCpyRight>
      </InnerSection>
    </Container>
  );
};
