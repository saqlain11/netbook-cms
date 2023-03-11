import ContentfulClient from "@netbook/contentful-client/client";
import * as contentful from "contentful";

const client: contentful.ContentfulClientApi = new ContentfulClient().client;

const fetchCommunity = () => {
  return client.getEntries({
    content_type: "community",
    select: "fields",
  });
};

export { fetchCommunity };
