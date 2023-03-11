import { Entry } from "contentful";

const parsedEntries = (items: Entry<unknown>[]) => {
  return items.map((item) => {
    return item.fields;
  });
};
export { parsedEntries };
