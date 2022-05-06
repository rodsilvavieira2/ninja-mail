import learnCardImage1 from "@public/learn-card-1.png";
import learnCardImage2 from "@public/learn-card-2.png";
import logo1 from "@public/logo-1.png";
import logo2 from "@public/logo-2.png";
import logo3 from "@public/logo-3.png";
import logo4 from "@public/logo-4.png";
import logo5 from "@public/logo-5.png";
import Member1 from "@public/member-1.png";
import Member2 from "@public/member-2.png";
import Member3 from "@public/member-3.png";

export const learnCards = [
  {
    id: 1,
    text: "Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.",
    link: "/",
    src: learnCardImage1,
    alt: "woman holding a cellphone",
  },
  {
    id: 2,
    text: "Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.",
    link: "/",
    src: learnCardImage2,
    alt: "people around a notebook",
  },
];

export const brandLogos = [
  {
    id: 1,
    src: logo1,
    alt: "Dragon eye",
  },
  {
    id: 2,
    src: logo2,
    alt: "Game commerce",
  },
  {
    id: 3,
    src: logo3,
    alt: "Last knight",
  },
  {
    id: 4,
    src: logo4,
    alt: "RadioTee",
  },
  {
    id: 5,
    src: logo5,
    alt: "Quest ais",
  },
];

export const members = [
  {
    id: 1,
    memberName: "Frankie",
    alt: "Frankie",
    src: Member1,
    startTime: new Date("2016-01-01").toISOString(),
  },
  {
    id: 2,
    memberName: "Camile",
    alt: "Camile",
    src: Member2,
    startTime: new Date("2012-01-01").toISOString(),
  },
  {
    id: 3,
    memberName: "Elayne",
    alt: "Elayne",
    src: Member3,
    startTime: new Date("2018-01-01").toISOString(),
  },
];
