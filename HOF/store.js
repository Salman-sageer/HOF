const inventory = {
    apple: 1.5,
    banana: 0.5,
    cherry: 2.0
};

const exchangeRate = 80; // 1 USD to 80 INR
const convertedInventory = Object.fromEntries(
    Object.entries(inventory).map(([item, price]) => [item, price * exchangeRate])
);

console.log("Converted Inventory:", convertedInventory);
