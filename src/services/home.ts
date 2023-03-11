import ContentfulClient from "@netbook/contentful-client/client";
import * as contentful from "contentful";

const client: contentful.ContentfulClientApi = new ContentfulClient().client;

const fetchCommunity = () => {
  return client.getEntries({
    content_type: "community",
    select: "fields",
  });
};
const fetchAboutUs = () => {
  return client.getEntries({
    content_type: "aboutUs",
    select: "fields",
  });
};
export { fetchCommunity, fetchAboutUs };
