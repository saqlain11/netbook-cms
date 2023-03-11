import { INavigation } from "@netbook/model";
import {
  layoutAction,
  layoutInitialState,
  layoutReducer,
} from "@netbook/reducers";
import { fetchHeaderNavigation } from "@netbook/services";
import { fetchStaticText } from "@netbook/services/layout";
import { parsedEntries } from "@netbook/utils";
import { createContext, ReactNode, useEffect, useReducer } from "react";

const LayoutContext = createContext([layoutInitialState, {}, () => undefined]);
const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layoutState, dispatch] = useReducer(layoutReducer, {
    ...layoutInitialState,
  });

  const fetchLayout = async () => {
    try {
      const navigationResponse = await fetchHeaderNavigation();
      const staticTextResponse = await fetchStaticText();

      dispatch({
        type: layoutAction.SET_NAVIGATION,
        data: parsedEntries(navigationResponse.items),
      });
      dispatch({
        type: layoutAction.SET_STATIC_TEXT,
        data: parsedEntries(staticTextResponse.items),
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchLayout();
  }, []);

  return (
    <LayoutContext.Provider value={{ layoutState, layoutAction: {}, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
export { LayoutContext };
