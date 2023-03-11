import {
  layoutAction,
  layoutInitialState,
  layoutReducer,
} from "@netbook/reducers";
import {
  fetchHeaderNavigation,
  fetchStaticText,
  fetchFooterLink,
} from "@netbook/services";
import { parsedEntries, parsedEntry } from "@netbook/utils";
import { createContext, ReactNode, useEffect, useReducer } from "react";

const LayoutContext = createContext([layoutInitialState, {}, () => undefined]);
const LayoutProvider = ({ children }: { children: ReactNode }) => {
  //@todo: have to remove these error in ts
  const [layoutState, dispatch] = useReducer(layoutReducer, {
    ...layoutInitialState,
  });

  const fetchLayout = async () => {
    try {
      //@note we could do here promise.all settled for parallel calls
      const navigationResponse = await fetchHeaderNavigation();
      const staticTextResponse = await fetchStaticText();
      const footerLinkResponse = await fetchFooterLink();

      //@todo: have to remove these error in ts
      dispatch({
        type: layoutAction.SET_NAVIGATION,
        data: parsedEntries(navigationResponse.items),
      });
      dispatch({
        type: layoutAction.SET_STATIC_TEXT,
        data: parsedEntry(staticTextResponse.items),
      });
      dispatch({
        type: layoutAction.SET_FOOTER,
        data: parsedEntries(footerLinkResponse.items),
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchLayout();
  }, []);
  //@todo: have to remove these error in ts
  return (
    <LayoutContext.Provider value={{ layoutState, layoutAction: {}, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
export { LayoutContext };
