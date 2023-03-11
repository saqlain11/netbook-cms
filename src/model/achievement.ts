interface IAchievement {
  rating: {
    noOfRating: string;
    users: string[];
    noOfMembers: string;
    members: string;
    ratingDescription: string;
    cta: {
      joinCommunity: string;
    };
  };
  rewards: {
    title: string;
    best: string;
    years: string;
    members: string;
    awardsDescription: string;
    cta: { goToAwards: string };
  };
  ourAchievement: {
    title: string;
    connectingDetail: string;
    scopeOfMedia: string;
    cta: {
      discoverMe: string;
    };
  };
}
export default IAchievement;
