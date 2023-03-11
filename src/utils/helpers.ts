import { Entry } from "contentful";

const parsedEntries = (items: Entry<unknown>[]) => {
  return items.map((item) => {
    return item.fields;
  });
};
const parsedEntry = (item: Entry<unknown>[]) => {
  return item[0].fields;
};

export { parsedEntries, parsedEntry };
