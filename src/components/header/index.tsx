import Image from "next/image";

import logo from "@public/lg-logo.png";

import { navItems } from "./header.conf";
import {
  Brand,
  Container,
  BrandImage,
  SignUpButton,
  HeaderNav,
  HeaderNavItem,
  HeaderNavList,
  HeaderRight,
  InnerContainer,
} from "./styles";

export function Header() {
  return (
    <Container>
      <InnerContainer>
        <Brand>
          <BrandImage>
            <Image layout="intrinsic" src={logo} alt="NinjaMail" />
          </BrandImage>
        </Brand>

        <HeaderRight>
          <HeaderNav>
            <HeaderNavList>
              {navItems.map((item) => (
                <li key={item.id}>
                  <HeaderNavItem href={item.link}>{item.label}</HeaderNavItem>
                </li>
              ))}
            </HeaderNavList>
          </HeaderNav>

          <SignUpButton href="/">Sing up free</SignUpButton>
        </HeaderRight>
      </InnerContainer>
    </Container>
  );
}
