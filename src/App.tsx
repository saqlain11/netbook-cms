import ContentfulClient from "@netbook/contentful-client/client";
import * as contentful from "contentful";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BaseLayout } from "@netbook/components";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
  // const client: contentful.ContentfulClientApi = new ContentfulClient().client;
  // client
  //   .getEntries({ content_type: "navigation" })
  //   .then((entry) => console.log(entry))
  //   .catch(console.error);

  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
