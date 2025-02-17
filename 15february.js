// const arr = [[3, 5, 1], [12, 7, 9], [14, 10, 4]];
// function nthlargest(arr) {
//     let b = arr.flat()
//     let newarr = b.sort((a, b) => b - a)
//     console.log(newarr[3 - 1]);
// }

// nthlargest(arr)


// const arr = [1, 2, 4, 5, 6];
// let sum = 0
// let n = 6
// let c = (n * (n + 1)) / 2
// function findmissing(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(c - sum);
// }
// findmissing(arr)



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// function murge(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i])
//     }
//     console.log(arr1);
// }
// murge(arr1, arr2)



// const str = "JavaScript is great and JavaScript is fun!";
// let newstr = str.split(" ");
// let obj={}

// function words(newstr) {
//     for (let i = 0; i < newstr.length; i++) {
//         if (obj[newstr[i]]) {
//            console.log(newstr[i])
//            break;
//         }else{
//             obj[newstr[i]]=1
//         }
        
//         }

// }

// words(newstr)




// const arr = [2, 7, 11, 15];

// function sum(arr,tar) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i]+arr[j]==tar) {
//                 console.log([i,j]);   
//             }
//         }
//     }
// }

// sum(arr,9)