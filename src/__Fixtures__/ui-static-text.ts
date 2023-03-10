import Laptop from "@netbook/assets/about-us-img-1.png";
import Cable from "@netbook/assets/about-us-img-2.png";
const STATIC_TEXT = {
  HEADER: {
    CTA: {
      LOGIN: "Login",
    },
    NAVIGATION: [
      {
        key: "1",
        label: "Home",
        link: "/home",
        children: [],
      },
      {
        key: "2",
        label: "Community",
        link: "/community",
        children: [
          {
            key: `Community-${1}`,
            label: "News feed",
            link: "/news-feed",
          },
        ],
      },
      {
        key: "3",
        label: "Blog",
        link: "/blog",
        children: [],
      },
      {
        key: "4",
        label: "Events",
        link: "/events",
        children: [],
      },
    ],
  },
  HOME: {
    COMMUNITY: {},
    ABOUT_US: {
      WHY_NETBOOKS: "Why Netbooks?",
      JOIN_NETBOOK: "Why Join to Netbook Social Network?",
      NETBOOK_SURVEY:
        "Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.",
      NETBOOK_SHARING: ["Groups", "Messages", "Share"],
      OUR_INTRO:"https://www.youtube.com/embed/ML9EMYggyEE",
      ABOUT_IMAGE_ONE:Laptop,
      ABOUT_IMAGE_TWO:Cable,
    },
  },
  FOOTER: {
    FOOTER_LINK: {},
  },
} as const;
export default STATIC_TEXT;
