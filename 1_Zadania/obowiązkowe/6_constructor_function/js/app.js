//zadanie 0
function Basket() {
    this.products = [];
}

Basket.prototype = {
    addProduct: function(name, price) {
    this.products.push({name: name, price: price});
    }
};

Basket.prototype.showBasket = function() {
    let sum = 0;
    this.products.forEach(p => sum += p.price);
    return {products: this.products, price: sum};
}

