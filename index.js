

// var greet = require('./Message')
// console.log(res)

// greet('welcome')


// console.log(window)
// console.log(global)
// console.log(setTimeout)
// console.log(setTimeout)
// console.log(clearTimeout)
// console.log(clearInterval)

// var a = 10
// console.log(window.a)
// console.log(global.a)
// console.log(a)

// function test() { }
// console.log(window.test)
// console.log(global.test)
// console.log(test)

// console.log(module)
// console.log(module.exports)

// console.log('hello')



//Custom module

// const os = require('os')

// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus())
// console.log(os.release())
// console.log(os.uptime())
// console.log(os.networkInterfaces())

//fs module

const fs = require('fs')


// fs.readFile('./index.js', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// console.log('hello sachin')

// try {
//   fs.readFileSync('./index.js')
// } catch (error) {
//   console.log(error)
// }

// fs.writeFile('./index.js', 'hello kohli', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('writabale successfully')
//   }
// })


// try {
//   fs.writeFileSync('./index.js', 'sachin')
// } catch (error) {
//   console.log(error)
// }


// fs.appendFile('./index.js', 'sachin', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('new data added')
//   }
// })

// fs.unlink('./index.js', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('file deleted')
//   }
// })

// fs.mkdir('/new', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('folder created')
//   }
// fs.rmdir('./hello1', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('folder removed')
//   }
// })

// const path = require('path')


// console.log(path.extname('./myfolder/index.html'))
// console.log(path.basename('./myfolder/index.html'))
// console.log(path.dirname('./myfolder/index.html'))

// const http = require('http')

// let server = http.createServer((req, res) => {
//   if (req.url === '/home') {
//     res.write('response from server from home')
//     res.end()
//   }

//   if (req.url === '/products') {
//     res.write(JSON.stringify([{ pname: 'apple', price: 2000 }, { pname: 'banana', price: 1000 }]))
//     res.end()
//   }

// })

// server.listen(5500, () => {
//   console.log('server started port 5500')
// })


//Node package manager

const underscore = require('underscore')



console.log(underscore.contains([1,2,3,4,5], 7))








