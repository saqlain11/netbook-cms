import ContentfulClient from "@netbook/contentful-client/client";
import * as contentful from "contentful";

const client: contentful.ContentfulClientApi = new ContentfulClient().client;

const fetchHeaderNavigation = () => {
  return client.getEntries({
    content_type: "navigation",
    select: "fields",
    order:"fields.key"
  });
};
const fetchStaticText = () => {
  return client.getEntries({
    content_type: "staticText",
    select: "fields",
    
  });
};
export { fetchHeaderNavigation, fetchStaticText };
