import moreClientImage from "@public/reach-more-clients.png";

import {
  Container,
  MoreCustomersImage,
  InnerSection,
  MoreCustomersSectionText,
  LearnButtonLink,
} from "./styles";

export function MoreCustomersSection() {
  return (
    <Container>
      <InnerSection>
        <MoreCustomersSectionText>
          Reach More Customers
        </MoreCustomersSectionText>

        <LearnButtonLink href="/">learn how</LearnButtonLink>

        <MoreCustomersImage layout="fill" src={moreClientImage} />
      </InnerSection>
    </Container>
  );
}
