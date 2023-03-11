import { INavigation, IFooterLink, IStaticText } from "@netbook/model/";
import { Entry } from "contentful";
import { Reducer } from "react";

export interface ILayoutState {
  navigation: INavigation | [];
  staticText: IStaticText | object;
  footer: IFooterLink | [];
}

const layoutAction = {
  SET_STATIC_TEXT: "SET_STATIC_TEXT",
  SET_NAVIGATION: "SET_NAVIGATION",
  SET_FOOTER: "SET_FOOTER",
};

const layoutInitialState: ILayoutState = {
  navigation: [],
  staticText: {},
  footer: [],
};

const layoutReducer = (
  state: ILayoutState,
  {
    type,
    data,
  }: { type: string; data: INavigation | IStaticText | IFooterLink }
) => {
  switch (type) {
    case layoutAction.SET_STATIC_TEXT:
      return { ...state, staticText: data };

    case layoutAction.SET_NAVIGATION:
      return { ...state, navigation: data };

    case layoutAction.SET_FOOTER:
      return { ...state, footer: data };

    default:
      return state;
  }
};
export default layoutReducer;
export { layoutAction, layoutInitialState };
