import { getLineTotalSatang } from "./product";
import type { Product } from "./product";

const products: Product[] = [
  { id: "notebook", name: "สมุดบันทึก", priceSatang: 12900, available: true },
  { id: "pen", name: "ปากกาสีน้ำเงิน", priceSatang: 2500, available: false },
];

for (const product of products) {
  const total = getLineTotalSatang(product, 2);
  console.log(product.id, total);
}


const jsonText = JSON.stringify(products);
console.log(jsonText);

const incomingQuantity: unknown = JSON.parse('"2"');
if (typeof incomingQuantity === "number") {
  console.log("number input:", incomingQuantity);
} else {
  console.log("rejected input type:", typeof incomingQuantity);
}
