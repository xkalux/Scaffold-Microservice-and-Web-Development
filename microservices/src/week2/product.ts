export type Product = {
  id: string;
  name: string;
  priceSatang: number;
  available: boolean;
};

export function getLineTotalSatang(
  product: Product,
  quantity: number,
): number | null {
    
  if (!product.available) {
    return null;
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
    return null;
  }
  return product.priceSatang * quantity;
}
