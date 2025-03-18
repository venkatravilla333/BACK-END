
// console.log('Hi')
// var user = getUserFromDb(2, (data1) => {
//            console.log(data1)
//                getUserFromDb(data1, (data2) => {
//                  console.log(data2)
//                       getUserFromDb(data2, (data3) => {
//                         console.log(data3)
//                           getUserFromDb(data3, (data4) => {
//                           console.log(data4)
//                          })
//                    })
//             })
// })
// // console.log(user)
// console.log('Bye')

// function getUserFromDb(num, cb) {
//   setTimeout(() => {
//   // console.log('Get User  from DB')
//     // return {id: id, name: 'sachin'}
//     // return {id: id, name: 'sachin'}
//     // var data = {id: id, name: 'sachin'}
//     var data = num*num
//     cb(data)
//   }, 4000)
  
// }


// console.log('Hi')
// getUserFromDb(2)
//   .then((data1) => {
//     console.log(data1)
//    return getUserFromDb(data1)
//   }).then((data2) => {
//     console.log(data2)
//    return getUserFromDb(data2)
//   }).then((data3) => {
//     console.log(data3)
//     return getUserFromDb(data3)
//   }).then((data4) => {
//     console.log(data4)
//   })
//   .catch((err) => console.log(err))
// // console.log(user)
// console.log('Bye')

// function getUserFromDb(num, cb) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//     var data = num*num
//       // cb(data)
//       res(data)
//   }, 4000)
  
//   })
// }



console.log('Hi')
async function fetchDetails() {
  var data1 = await getUserFromDb(2)
  console.log(data1)
  var data2 = await getUserFromDb(data1)
  console.log(data2)
  var data3 = await getUserFromDb(data2)
  console.log(data3)
  var data4 = await getUserFromDb(data3)
  console.log(data4)
  
}
fetchDetails()
console.log('bye')  

function getUserFromDb(num, cb) {
 return new Promise((res, rej) => {
   setTimeout(() => {
      //async operations
    var data = num*num
      // cb(data)
      res(data)
  }, 4000)
  
  })
}

