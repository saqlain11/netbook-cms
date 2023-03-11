import { IAboutUs, IAchievement, ICommunity } from "@netbook/model/";
import { EntryCollection } from "contentful";

export interface IHomeState {
  community: ICommunity | object;
  aboutUs: IAboutUs | object;
  achievement: IAchievement | object;
}

const homeAction = {
  SET_COMMUNITY: "SET_COMMUNITY",
  SET_ABOUT_US: "SET_ABOUT_US",
  SET_ACHIEVEMENT: "SET_ACHIEVEMENT",
};

const homeInitialState: IHomeState = {
  community: {},
  aboutUs: {},
  achievement: {},
};

const homeReducer = (
  state: IHomeState,
  { type, data }: { type: string; data: unknown[] }
) => {
  switch (type) {
    case homeAction.SET_COMMUNITY:
      return { ...state, ...data };

    case homeAction.SET_ABOUT_US:
      return { ...state, aboutUs: data };

    case homeAction.SET_ACHIEVEMENT:
      return { ...state, achievement: data };

    default:
      return state;
  }
};
export default homeReducer;
export { homeAction, homeInitialState };
