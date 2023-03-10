import Laptop from "@netbook/assets/about-us-img-1.png";
import Cable from "@netbook/assets/about-us-img-2.png";
import Facebook from "@netbook/assets/facebook.svg";
import Instagram from "@netbook/assets/instagram.svg";
import Linkedin from "@netbook/assets/linkedin.svg";
import Twitter from "@netbook/assets/twitter.svg";
const STATIC_TEXT = {
  header: {
    cta: {
      login: "Login",
    },
    navigation: [
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
  home: {
    community: {
      netbookCommunity: "Netbook community",
      netbookSolution: "Your Solutions For Community!",
      netbookCommunitySurvey:
        "More than 2 billion people in over countries use socibook to stay in touch with friends & family",
      cta: {
        aboutMore: "About More",
        inviteFriend: "Invite Friend",
      },
    },
    aboutUs: {
      whyNetbooks: "Why Netbooks?",
      joinNetbook: "Why Join to Netbook Social Network?",
      netbookSurvey:
        "Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.",
      netbookSharing: ["Groups", "Messages", "Share"],
      ourIntro: "https://www.youtube.com/embed/ML9EMYggyEE",
      AboutImageOne: Laptop,
      aboutImageTwo: Cable,
    },
    achievement: {
      rating: {
        noOfRating: "4.8 Rating",
        users: [
          "https://joesch.moe/api/v1/random?key=1",
          "https://joesch.moe/api/v1/random?key=2",
          "https://joesch.moe/api/v1/random?key=3",
        ],
        noOfMembers: "+836k",
        members: "Members",
        ratingDescription:
          "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
        cta: {
          joinCommunity: "Join Our Community",
        },
      },
      rewards: {
        title: "Awwwards",
        best: "Best of",
        years: "2021",
        members: "Members",
        awardsDescription:
          "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
        cta: { goToAwards: "Go To Awards" },
      },
      ourAchievement: {
        title: "Our Achievement",
        connectingDetail: "We are Connecting You The Digital Life.",
        scopeOfMedia:
          "The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.",
        cta: {
          discoverMe: "Discover me",
        },
      },
    },
  },

  footer: {
    secondaryFooter: {
      SubscribeNewsLetter: {
        subscriptionHeading: "Subscribe Cirkle Newsletter",
        subscriptionDescription:
          "Subscribe to be the first one to know about updates.<br /> Enter your email",
        cta: {
          submit: "Submit",
        },
      },
      footerLink: [
        {
          label: "Home",
          link: "/home",
          subLink: [
            { label: "Home", link: "/home" },
            { label: "Community", link: "/community" },
            { label: "Events", link: "/events" },
            { label: "Contact", link: "/contact" },
          ],
        },

        {
          label: "Resources",
          link: "/resources",
          subLink: [
            { label: "Blog", link: "/blog" },
            { label: "News", link: "/news" },
            { label: "Guides", link: "/guides" },
            { label: "Help Center", link: "/help-center" },
          ],
        },
        {
          label: "Community",
          link: "/community",
          subLink: [
            { label: "News feed", link: "/news-feed" },
            { label: "Profile", link: "/profile" },
            { label: "Friends", link: "/friends" },
            { label: "Forum", link: "/forum" },
          ],
        },
        {
          label: "Main links",
          link: "/main-link",
          subLink: [
            { label: "Members", link: "/members" },
            { label: "Activity", link: "/activity" },
            { label: "Groups", link: "/groups" },
            { label: "Private Group", link: "/private-group" },
          ],
        },
      ],
    },

    primaryFooter: {
      allReserved: "Besnik Creative Agency.",
      socialMedia: [
        { link: "https://www.twitter.com", Logo: Twitter },
        { link: "https://www.instagram.com", Logo: Instagram },
        { link: "https://www.facebook.com", Logo: Facebook },
        { link: "https://www.linkedin.com", Logo: Linkedin },
      ],
    },
  },
  notFound: {
    status: "404",
    description: "Sorry, the page you visited does not exist.",
    backHome: "Back",
  },
  errorBoundary: {
    status: "500",
    description: "Sorry, something went wrong.",
    backHome: "Back home",
  },
} as const;
export default STATIC_TEXT;
