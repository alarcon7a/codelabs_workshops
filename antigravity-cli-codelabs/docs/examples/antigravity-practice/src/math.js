export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a + b;
}

export function calculateInvoiceSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
