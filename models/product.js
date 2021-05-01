const fs = require('fs');
const path = require('path';)


//creating and storing products
const products = [];
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }


    save() {
        products.push(this);
    }


    static fetchAll() {
        return products;
    }

}