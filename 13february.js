// let a=[1,2,3,4]                       // q-1
// let b=[5,6,7,8]

// console.log([...a,...b])





// const person = { name: "Alice", age: 25 };                    // q-2

// let {...obj2}=person

// obj2.age=30

// console.log(obj2);




// function ab(...a) {                      // q-3
//     let sum=0
//     for (let i = 0; i < a.length; i++) {
//         sum+=a[i]
//     }
//     console.log(sum);
// }

// ab(5,10,15,20)



// const numbers = [1, 2, 3, 4, 5, 6];                  // q-4
// let [first,second,...rest]=numbers

// console.log(`first=${first} second=${second} rest=[${rest}]`);




// const obj1 = { a: 1, b: 2 };                    // q-5
// const obj2 = { c: 3, d: 4 }; 

// console.log({...obj1,...obj2})




// const user = { id: 101, name: "John", role: "Admin" }                      // q-6

// let {role,...a}=user
// console.log(a);






// const numbers = [45, 78, 12, 89, 23];                  // q-7         

// console.log(Math.max(...numbers));




// function greet(firstName,...messages) {                                    // q-8               
// console.log(firstName,":",messages.join(", "));
    
// } 
//     greet("Alice", "Hello", "Good Morning", "How are you?"); 





// let x = "apple", y = "banana";                                      // q-9

// let a=[...[x]]
// let b=[...[y]]

// x=b[0]
// y=a[0]

// console.log(y,x);





// const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];                                // q-10
// console.log([...nestedArr].flat(2));
