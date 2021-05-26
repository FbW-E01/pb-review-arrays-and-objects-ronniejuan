// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.

const str =["Ambient","Clasic","Funk"]
console.log(str)
// 2. Create an array that contains one string, one number and one boolean.
const str2 = ["John",73,""]
console.log(str2)
// 3. Create an array hat contains three empty arrays.
const empty =[[],[],[]];
console.log(empty)

// 4. Create an empty object.

let object ={

}
console.log(object)
// 5. Create an object with three properties: id, email, password.
const obj = {
    id:"232323",
    email:"yo@net.de",
    password: "****"
}
console.log(obj)
// 6. Create an array that contains three objects. All objects should have a width and a height property.

const size=[
    {
        width:10,
        height:15
    },
    {
        width:11,
        height:16
    },
     {
        width:12,
        height:18
    },
    
]
console.log(size)
// 7. Create an object that contains three properties: a string, an array and an object. 
//Invent your own property names and values.

const ownObject = {
    name:"Homer",
    Family:["Bart","Lisa","Marge", "Maggie"],
    Food:{
        Meat:"lamb",
        Drinks: "Bear"

    }
}
// 8. Print the `type` of a variable that has an array value.

console.log(ownObject["Family"])
console.log(ownObject.Family)
// 9. Print the `type` of a variable that has an object value. 
console.log(typeof(ownObject))
// 10. Create an array with five random values. 

let array2 =[3,1,"queso",9,3];


// 10.1. Add one value to the end of the array.
array2.push("car")
console.log(array2)
// 10.2. Add one thing to the beginning of the array.
console.log(array2.unshift("johnny"))
console.log(array2)
// 10.3. Take out one thing from the end of the array.
array2.splice(1,2)
console.log(array2)

// 10.4. Print the length of the array.
console.log(array2.length)
// 10.5. Take out one thing from the end of the array.
array2.pop()
console.log(array2)
// 10.6. Take out one the 2nd thing from the array.
delete array2[1]
console.log(array2)