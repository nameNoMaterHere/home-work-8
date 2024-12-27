//2
"use strict"
class Product {
    constructor(name, price) {
      this.name = name;
      this.price  = price;
    }
}
let products = [
    new Product("chair", 120),
    new Product("table", 500),
    new Product("toy", 50),
    new Product("lamp", 25),
    new Product("sofa", 800),
    new Product("carpet", 70),
    new Product("wardrobe", 1200),
    new Product("bed", 1000)
]

// console.log(products)
function findProductInPrice(){
    let price=parseInt(document.getElementById("price").value)
    let productList = document.getElementById("product-list")
    productList.innerHTML = ""// ניקוי בכל מספר חדש שלא ישמר המספר הראשון
    let FounAproduct=false
    products.forEach(function(product){
        if(product.price<=price){
            let productDiv = document.createElement("div")
            productDiv.className = "product"
            productDiv.textContent = product.name+"  "+product.price+"$"
            productList.append(productDiv)
            FounAproduct=true

        }})
        if(!FounAproduct){
        let notFoundDiv = document.createElement("div");
        notFoundDiv.className = "product";
        notFoundDiv.textContent = "No products found under the price of " + price;
        productList.appendChild(notFoundDiv);
        }
    

}
// ניסיתי לעשות שהדף יציג את כל המוצרים אם הקלט ריק אך ללא הצלחה אשמח להסבר איך לעשות את זה 