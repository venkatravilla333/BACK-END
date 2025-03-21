

// var express = require('express')
// let Joi = require('joi')

// var router = express.Router()

// let products = [
//   {
//     id: 1,
//     name: 'laptop',
//     price: 30000
//   },
//   {
//     id: 2,
//     name: 'mobile',
//     price: 20000
//   },
//   {
//     id: 3,
//     name: 'chair',
//     price: 300
//   }
// ]

// //get all products

// router.get('/', (req, res) => {
//   res.send(products)
// })

// //get single product

// router.get('/:id', (req, res) => {
//   let product = products.find((product) => product.id === parseInt(req.params.id))
//   if (!product) {
//     res.status(404).send('Product not found with given id')
//   }
//   return res.status(200).send(product)
// })

// //create product

// router.post('/', (req, res) => {
  
//  var {error} = validateInputdata(req.body)

//   if (error) {
//     console.log(error)
//     res.status(400).send(error.details[0].message)
//   }
  
//   let newProduct = {
//     id: products.length + 1,
//     name: req.body.name,
//     price: req.body.price
//   }
//   products.push(newProduct)
//   res.send(newProduct)
//   console.log(newProduct)
// })


// //update product

// router.put('/:id', (req, res) => {

//  var {error} = validateInputdata(req.body)

//   if (error) {
//     console.log(error)
//     res.status(400).send(error.details[0].message)
//   }

 
//     let product = products.find((product) => product.id === parseInt(req.params.id))
//   if (!product) {
//     res.status(404).send('Product not found with given id')
//   }
//   product.price = req.body.price
//   return res.send(product)
// })

// //delete single product

// router.delete('/:id', (req, res) => {
//    let product = products.find((product) => product.id === parseInt(req.params.id))
//   if (!product) {
//     res.status(404).send('Product not found with given id')
//   }

//   let index = products.indexOf(product)

//   products.splice(index, 1)

//   return res.send(product)

// })

// module.exports = router


// function validateInputdata(product) {
//     let schema = Joi.object({
//     name: Joi.string().min(3).required(),
//     price: Joi.number().min(100).required()
//   })
//   return schema.validate(product)
// }




var  express = require('express')
var Product = require('../models/productModel')

var router = express.Router()

router.post('/', async(req, res) => {
  var newProduct = new Product({
     name: req.body.name,
     price: req.body.price,
     inStock: req.body.inStock
  })
   var result = await newProduct.save()
  // console.log(result)
  res.send(result)
}
) 

//get all

router.get('/', async (req, res) => {
  var pageNum = 2
  var resPerPage = 5
  console.log('hello')
  var result = await Product
    .find()
    .skip((pageNum - 1) * resPerPage)
    .limit(resPerPage)
  
    // .find({name: /^mobile/i})
    // .find({name: /mobile$/i})
    // .find({name: /.*mobile.*/i})
    // .and([{name: 'mobile'}, {price: 20000}])
    // .limit(1)
    // .sort('-price')
    // .select('-_id price')
  console.log(result)
  res.send(result)
}
) 

//get single product
router.get('/:id', async(req, res) => {
  console.log(req.params)
  var result = await Product.find({_id: req.params.id })
  console.log(result)
  res.send(result)
}
) 
//upadte product
router.put('/:id', async(req, res) => {
  console.log(req.params)
  var result = await Product.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name }, {new: true })
  console.log(result)
  res.send(result)
}
) 
//delete product
router.delete('/:id', async(req, res) => {
  console.log(req.params)
  var result = await Product.findOneAndDelete({ _id: req.params.id })
  console.log(result)
  res.send(result)
}
) 



module.exports = router