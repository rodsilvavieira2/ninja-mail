import Head from "next/head";

import {
  Background,
  BrandsSection,
  CreateEmailSection,
  GetStartedSection,
  JoinSection,
  Main,
  MembersSection,
  MoreCustomersSection,
  PresentationSection,
  TopBackground,
} from "@src/styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaMail</title>
      </Head>

      <Main>
        <Background>
          <TopBackground />

          <CreateEmailSection />

          <MoreCustomersSection />

          <PresentationSection />

          <MembersSection />

          <JoinSection />

          <BrandsSection />
        </Background>

        <GetStartedSection />
      </Main>
    </>
  );
}
