import assert from "node:assert/strict";
import { add, calculateInvoiceSubtotal, subtract } from "../src/math.js";

assert.equal(add(2, 3), 5);
assert.equal(subtract(7, 4), 3);
assert.equal(
  calculateInvoiceSubtotal([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
  ]),
  35
);

console.log("math tests passed");
