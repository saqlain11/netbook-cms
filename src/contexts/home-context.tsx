import { homeAction, homeInitialState, homeReducer } from "@netbook/reducers";
import { fetchAboutUs, fetchCommunity } from "@netbook/services";
import { parsedEntry } from "@netbook/utils";
import { createContext, ReactNode, useEffect, useReducer } from "react";

const HomeContext = createContext([homeInitialState, {}, () => undefined]);
const HomeProvider = ({ children }: { children: ReactNode }) => {
  //@todo: have to remove these error in ts
  const [homeState, dispatch] = useReducer(homeReducer, {
    ...homeInitialState,
  });

  const fetchHome = async () => {
    try {
      //@note we could do here promise.all settled for parallel calls
      const communityResponse = await fetchCommunity();
      const aboutUsResponse = await fetchAboutUs();

      dispatch({
        type: homeAction.SET_COMMUNITY,
        data: parsedEntry(communityResponse.items),
      });
      dispatch({
        type: homeAction.SET_ABOUT_US,
        data: parsedEntry(aboutUsResponse.items),
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);
  //@todo: have to remove these error in ts
  return (
    <HomeContext.Provider value={{ homeState, layoutAction: {}, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};
export default HomeProvider;
export { HomeContext };
