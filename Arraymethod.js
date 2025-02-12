// filter


// let arr=[1,2,3,4,5,6]

// function even(arr) {
//     let b=arr.filter((ele)=>ele%2==0)
//     console.log(b);
    
// }

// even(arr)


// let arr=[-3,4,-1,6,-7,9]

// function negative(arr) {
//     let b=arr.filter((ele)=>ele>0)
//     console.log(b);
    
// }

// negative(arr)


// let arr=["apple","banana","cat","stawberry"]

// function string(arr) {
//     let b=arr.filter((ele)=>ele.length>5)
//     console.log(b);
    
// }

// string(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
//     return true;
// }

// function prime(arr) {
//     let primes = arr.filter(isPrime);
//     console.log(primes);
// }

// prime(arr);



// let arr=[{name: "Alice", age: 17}, {name: "Bob", age: 20}]

// function even(arr) {
//     let b=arr.filter((ele)=>ele.age<18)
// console.log(b);

// }

// even(arr)





//                                      Map


//  let arr=[1,2,3]
 
//  function dauble(arr) {
//     let b=arr.map((ele)=>ele*2)
// console.log(b);
 
// }

// dauble(arr)




// let arr=[0, 25, 100]

// function Converting(arr) {
//     let b=arr.map((ele)=>(ele*9/5)+32)
//     console.log(b);
    
// }

// Converting(arr)


// let arr=[{name: "Alice", age: 25}, {name: "Bob", age: 30}]

// function onlynme(arr) {
//     let b=arr.map((ele)=>ele.name)
//     console.log(b);
    
// }

// onlynme(arr)



// let arr=["hello","world"]

// function firstletter(arr) {
//     let b=arr.map((ele)=>ele.charAt(0).toUpperCase()+ele.slice(1))
//     console.log(b);
    
// }

// firstletter(arr)



// let arr=[2,3,4,5]

// function squre(arr) {
//     let b=arr.map((ele)=>ele*ele)
// console.log(b);

// }
// squre(arr)




//                                  forEach
             
//  let arr=["apple", "banana", "cherry"]                                

//  function a(arr) {
//     arr.forEach((ele=>console.log(ele)))
//  }

//  a(arr)




// let arr=[1,2,3,4,5]
// let sum=0
// function max(arr) {
//     arr.forEach((ele)=>sum+=ele
//     )
// console.log(sum);

// }

// max(arr)




// let arr=[1,2,3,4,5,6]
// let count=0
// function even(arr) {
//     arr.forEach((ele)=>{if (ele%2==0) {
//         count++
//     }})
//     console.log(count);
    
// }

// even(arr)



// let arr=[{item: "apple", price: 100}, {item: "banana", price: 50}]

// function discount(arr) {

//     arr.forEach((ele)=>{
//         let a=ele.price-ele.price*0.1;
//         console.log({item:ele.item,price:a});
        
//     })
    
// }


// discount(arr)





// let arr=["hello","world"]

// function exaclamation(arr) {
//     arr.forEach((ele)=>console.log(ele+"!"))
// }

// exaclamation(arr)