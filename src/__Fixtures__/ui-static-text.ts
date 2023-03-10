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
  },
  FOOTER: {
    FOOTER_LINK: {},
  },
} as const;
export default STATIC_TEXT;
