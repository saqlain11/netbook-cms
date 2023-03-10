import Laptop from "@netbook/assets/about-us-img-1.png";
import Cable from "@netbook/assets/about-us-img-2.png";
import Facebook from "@netbook/assets/facebook.svg";
import Instagram from "@netbook/assets/instagram.svg";
import Linkedin from "@netbook/assets/linkedin.svg";
import Twitter from "@netbook/assets/twitter.svg";
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
    COMMUNITY: {
      NETBOOK_COMMUNITY: "Netbook community",
      NETBOOK_SOLUTION: "Your Solutions For Community!",
      NETBOOK_COMMUNITY_SURVEY:
        "More than 2 billion people in over countries use socibook to stay in touch with friends & family",
      CTA: {
        ABOUT_MORE: "About More",
        INVITE_FRIEND: "Invite Friend",
      },
    },
    ABOUT_US: {
      WHY_NETBOOKS: "Why Netbooks?",
      JOIN_NETBOOK: "Why Join to Netbook Social Network?",
      NETBOOK_SURVEY:
        "Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.",
      NETBOOK_SHARING: ["Groups", "Messages", "Share"],
      OUR_INTRO: "https://www.youtube.com/embed/ML9EMYggyEE",
      ABOUT_IMAGE_ONE: Laptop,
      ABOUT_IMAGE_TWO: Cable,
    },
    ACHIEVEMENT: {
      RATING: {
        NO_OF_RATING: "4.8 Rating",
        USERS: [
          "https://joesch.moe/api/v1/random?key=1",
          "https://joesch.moe/api/v1/random?key=2",
          "https://joesch.moe/api/v1/random?key=3",
        ],
        NO_OF_MEMBERS: "+836k",
        MEMBERS: "Members",
        RATING_DESCRIPTION:
          "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
        CTA: {
          JOIN_COMMUNITY: "Join Our Community",
        },
      },
      REWARDS: {
        TITLE: "Awwwards",
        BEST: "Best of",
        YEARS: "2021",
        MEMBER: "Members",
        AWARDS_DESCRIPTION:
          "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
        CTA: { GO_TO_AWARDS: "Go To Awards" },
      },
      OUR_ACHIEVEMENT: {
        TITLE: "Our Achievement",
        CONNECTING_DIGITAL: "We are Connecting You The Digital Life.",
        SCOPE_OF_MEDIA:
          "The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.",
        CTA: {
          DISCOVER_ME: "Discover me",
        },
      },
    },
  },
  FOOTER: {
    SECONDARY_FOOTER: {
      FOOTER_LINK: {},
    },

    PRIMARY_FOOTER: {
      ALL_RESERVED: "Besnik Creative Agency.",
      SOCIAL_MEDIA: [
        { LINK: "https://www.twitter.com", LOGO: Twitter },
        { LINK: "https://www.instagram.com", LOGO: Instagram },
        { LINK: "https://www.facebook.com", LOGO: Facebook },
        { LINK: "https://www.linkedin.com", LOGO: Linkedin },
      ],
    },
  },
} as const;
export default STATIC_TEXT;
