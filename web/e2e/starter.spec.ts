import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the sample catalog and navigates to it", async ({ page }) => {
  await expect(page).toHaveTitle(/Mini Ecommerce/);
  await expect(page.getByRole("heading", { name: "Mini Ecommerce", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "สมุดบันทึก", exact: true })).toBeVisible();

  await page.getByRole("link", { name: "Catalog", exact: true }).click();

  await expect(page).toHaveURL(/\/#catalog$/);
  await expect(page.getByText("฿129.00", { exact: true })).toBeVisible();
});

test("increments the sample cart for each click", async ({ page }) => {
  const addItem = page.getByRole("button", { name: "เพิ่มสินค้าตัวอย่าง", exact: true });

  await expect(page.getByText("จำนวนในตะกร้า: 0", { exact: true })).toBeVisible();
  await addItem.click();
  await expect(page.getByText("จำนวนในตะกร้า: 1", { exact: true })).toBeVisible();
  await addItem.click();
  await expect(page.getByText("จำนวนในตะกร้า: 2", { exact: true })).toBeVisible();
});

test("starts a fresh sample cart after reloading", async ({ page }) => {
  await expect(page.getByText("จำนวนในตะกร้า: 0", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "เพิ่มสินค้าตัวอย่าง", exact: true }).click();
  await expect(page.getByText("จำนวนในตะกร้า: 1", { exact: true })).toBeVisible();

  await page.reload();

  await expect(page.getByText("จำนวนในตะกร้า: 0", { exact: true })).toBeVisible();
});
