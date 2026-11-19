export type Product = {
    id: string;
    name: string;
    priceSatang: number;
    available: boolean;
};


export function getLineTotalSatang(product: Product, quantity: number,): number | null {
    const Rules  = !Number.isInteger(quantity) || quantity < 1 || quantity > 5
    if (!product.available) {
        return null;
    }
    if (Rules) {
        return null;
    }
    return product.priceSatang * quantity;
}

