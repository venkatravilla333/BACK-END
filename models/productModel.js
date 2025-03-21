var  mongoose = require("mongoose")


var productsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  inStock: {
    type: Boolean,
    require: true
  }
})

var Product = mongoose.model('Product', productsSchema)

module.exports = Product