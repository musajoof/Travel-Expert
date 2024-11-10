import data from "./Data";

export const searchItems = (query, category) => {
  return data.filter(
    (item) =>
      item.category === category &&
      item.name.toLowerCase().includes(query.toLowerCase())
  );
};
