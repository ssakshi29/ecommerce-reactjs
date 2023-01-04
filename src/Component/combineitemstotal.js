export function combineitemstotal(items) {
  const itemtotal = {};
  items.forEach((item) => {
    itemtotal[item.id] = { ...item, total: item.price * item.quantity };
  });
  return Object.values(itemtotal);
}
