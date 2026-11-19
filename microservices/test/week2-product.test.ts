import { expect, test } from "bun:test";
import { getLineTotalSatang } from "../src/week2/product";
import type { Product } from "../src/week2/product";

const notebook: Product = {
  id: "notebook",
  name: "สมุดบันทึก",
  priceSatang: 12900,
  available: true,
};

const pen: Product = {
  id: "pen",
  name: "ปากกา",
  priceSatang: 2500,
  available: false,
};

test("quantity 1", () => {
  expect(getLineTotalSatang(notebook, 1)).toBe(12900);
});
test("quantity 2", () => {
  expect(getLineTotalSatang(notebook, 2)).toBe(25800);
});
test("quantity 5", () => {
  expect(getLineTotalSatang(notebook, 5)).toBe(64500);
});

test("zero quantity", () => {
  expect(getLineTotalSatang(notebook, 0)).toBeNull();
});
test("quantity above five", () => {
  expect(getLineTotalSatang(notebook, 6)).toBeNull();
});

test("fractional quantity", () => {
  expect(getLineTotalSatang(notebook, 1.5)).toBeNull();
});
test("unavailable product", () => {
  const unavailable: Product = { ...notebook, available: false };
  expect(getLineTotalSatang(unavailable, 1)).toBeNull();
});

test("product remains unchanged", () => {
  const before = { ...notebook };
  getLineTotalSatang(notebook, 2);
  expect(notebook).toEqual(before);
});

test("unavailable pen product", () => {
  expect(getLineTotalSatang(pen, 2)).toBeNull();
});
