import * as contentful from "contentful";
/**/
class ContentfulClient {
  client: contentful.ContentfulClientApi;
  constructor() {
    this.client = contentful.createClient({
      space: `${import.meta.env.VITE_CONTENTFUL_SPACE}`,
      environment: `${import.meta.env.VITE_CONTENTFUL_ENVIRONMENT}`, // defaults to 'master' if not set
      accessToken: `${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
    });
  }
}
export default ContentfulClient;
