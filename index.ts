let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Watch", price: 5000 }
];

function getProduct(id: number) {
    return products.find(product => product.id == id);
}

function displayProduct(product: { id: number; name: string; price: number }) {
    console.log(product.id, product.name, product.price);
}

let result = getProduct(5);

if (result) {
    displayProduct(result);
} else {
    console.log("Product not found");
}

export{}