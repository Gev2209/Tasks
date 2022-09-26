// let firstPart = 'Likes'

// let objectNum = {
//     name: 'gevorg',
//     age: 26,
//     [firstPart + 'JavaScript']: true,
// }
//  console.log(objectNum[firstPart])...........????


//  let key = 'name'
//  console.log(objectNum[key])


// let id = Symbol('id')
// let Obektner = {
//     name: 'gev',
//     age: 26,
//     [id]: 'Inch vor arjeq'
// }
// console.log(Obektner)

// let userInfo = {
//     name: 'Gevorg',
//     age: 26,
//     adress: {
//         city: 'Erevan',
//         street: 'margaryan'
//     }
// }

// console.log(userInfo)
// console.log(userInfo.adress)
// console.log(userInfo.adress.city)


// function userInfoAbout (name, age) {
//     return {
//         name: name,
//         age:age,
//     }
// }

// let info = userInfoAbout('gevorg', 26)
// console.log(info)


// let user = {
//     name: 'gev',
//     age: 26
// }

// let userInfo = Object.assign({}, user)
// userInfo.age = 18
// console.log(user)
// console.log(userInfo)


// console.log(user)
// user.age = 30
// console.log(user)
// user['Likes JavaScript'] = true
// console.log(user)
// user.adress = {
//     city: 'erevan',
//     street: 'margaryan',
// }
// console.log(user)
// console.log(user.adress.city)

// delete user.age
// console.log(user)
// delete user.adress
// console.log(user)
// console.log(user.name)


// let cars = {
//     car1: 'BMW',
//     car2: 'MAzda',
//     car3: 'Lexus',
//     car4: 'Mercedes'
// }

// let carsInfo = cars
// carsInfo.car1 = 'Pejo'
// console.log(cars)
// console.log(carsInfo)

// let carsInfo = Object.assign({}, cars)
// carsInfo.car1 = 'Pejo'
// console.log(cars)
// console.log(carsInfo)

// let user = {
//     name: undefined,
// }
// if (user.name) {
//     console.log(user.name)
// }

// if ('name' in user ) {
//     console.log(user.name)
// }



let userInfo = {
    name: 'Gevorg',
    age: 26,
    adress: {
        city: 'Erevan',
        street: 'margaryan'
    }
}

showInfo ()  {
    
    console.log(`${userInfo.name}, ${userInfo.age} qaxaq: ${userInfo.adress}`)    
 }
 
 userInfo.showInfo()
// for (let key in userInfo) {
//     console.log(key)
//     console.log(userInfo[key])
// }

// for (let keys in  userInfo   .adress) {
//     console.log(keys)
//     console.log(userInfo.adress[keys])
// }












