require('./connection')

const Product = require('./models/Product')

async function main() {
    const product = new Product({
        name: 'laptop',
        description: 'lenovo thinkpad x1 carbon 6th generation',
        price: 1300.99
    })
    
    const productSaved = await product.save();
    return productSaved
}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err))
