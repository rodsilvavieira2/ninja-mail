import { LearnCard } from "@src/components";

import { learnCards } from "../home.conf";
import {
  Container,
  PresentationSectionCardsWrapper,
  PresentationSectionSubtext,
  PresentationSectionTextsWrapper,
  PresentationSectionTitle,
  InnerSection,
} from "./styles";

export function PresentationSection() {
  return (
    <Container>
      <InnerSection>
        <PresentationSectionCardsWrapper>
          {learnCards.map((card) => (
            <LearnCard key={card.id} {...card} />
          ))}
        </PresentationSectionCardsWrapper>

        <PresentationSectionTextsWrapper>
          <PresentationSectionTitle>
            The source for proven, engaging email campaigns
          </PresentationSectionTitle>

          <PresentationSectionSubtext>
            Whether you are a startup, small business, e-commerce store, or want
            to promote your app, NinjaMail has the feature set tailored for your
            business.
          </PresentationSectionSubtext>
        </PresentationSectionTextsWrapper>
      </InnerSection>
    </Container>
  );
}
