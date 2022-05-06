import { WhiteSolidLinkButton } from "@src/components/links";

import { Container, GetStartedSectionTitle } from "./styles";

export function GetStartedSection() {
  return (
    <Container>
      <GetStartedSectionTitle>Get started today!</GetStartedSectionTitle>

      <WhiteSolidLinkButton href="/">pick a plan</WhiteSolidLinkButton>
    </Container>
  );
}
