import * as combineitemstotal from "./combineitemstotal";

export function combineitems(items) {
  const combineitem = {};

  items.forEach((item) => {
    if (combineitem[item.id]) {
      combineitem[item.id].quantity += 1;
    } else {
      combineitem[item.id] = { ...item, quantity: 1 };
    }
  });
  const itemstotal = combineitemstotal.combineitemstotal(
    Object.values(combineitem)
  );
  return Object.values(itemstotal);
}
