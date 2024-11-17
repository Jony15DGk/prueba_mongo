require('./connection')

const Product = require('./models/Product')

const product = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th generation',
    price: 1300.99
})

console.log(product)
