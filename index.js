// //create an array of object as products
// //create the following function:
// //1.getProduct(id)
// //find and return a product based on its id
// let products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Watch" }
// ];
// function getProduct(id) {
//     return products.find(product => product.id == id);
// }
// console.log(getProduct(2));

// //calculate Discount(price,discount)
// //calculate and return the price after applying discount

// function calculateDiscount(price,discount){
//     return price -(price * discount / 100);
// }
// console.log(calculateDiscount(500,20));

// //displayproduct(product)
// //display the product name and price using console

// let products = [
//     { id: 1, name: "Laptop", price: 25000 },
//     { id: 2, name: "Mobile", price: 12000 },
//     { id: 3, name: "Watch", price: 5000 }
// ];
// function displayproduct(product) {
//     console.log(product.id, product.name, product.price);   
// }

// displayproduct(products[2]);

// //call getProduct(id) and store the result in a variable

// let products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Watch" }
// ];
// function getProduct(id) {
//     return products.find(product => product.id == id);
// }
// let result = getProduct(2);
// console.log(result);
// console.log(getProduct(2));

//if the product exists ,call displayProduct(result).
//if the product is not found .it prints : product not found

let products = [
    { id: 1, name: "Laptop", price: 25000 },
    { id: 2, name: "Mobile", price: 12000 },
    { id: 3, name: "Watch", price: 5000 }
];
function getProduct(id) {
    return products.find(product => product.id == id);
}
function displayproduct(product) {
    console.log(product.id, product.name, product.price);   
}
let result = getProduct(4);
if (result){
    displayproduct(result);
}else{
    console.log( "product id not found" );       
}
console.log(result);
