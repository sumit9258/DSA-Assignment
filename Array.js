// let arr=[1,2,3,4,5]
// let reversearr=[]                                  // Q-1                  

// function reverse(arr) {
//     for (let i = arr.length-1; i >= 0; i--) {
//         reversearr.push(arr[i])
        
//     }
//     console.log(reversearr);
// }

// reverse(arr)



// let arr=[1,2,3,4,5,6]                                             // Q-2
// let maxv=0;
// let mini=arr[0];

// function max() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>maxv) {
//             maxv=arr[i]
//         } else if (arr[i]<mini) {
//             mini=arr[i]
//         }

        
//     }
//     console.log("Maximum  value",maxv);
//     console.log("Minimum value",mini);
    
// }

// max()



// let arr=[1,2,3,4,5]                                                  // Q- 3

// let arr2=arr.sort((a,b)=>b-a)

// let k=2;

// function kthmax() {
//     console.log(arr2[k-1]);
    
//     console.log(arr[k-1]);
    

// }
// kthmax()



// let arr=[-1,5,4,-2,2,-3,3,-4,1,2]                                                               //Q-4

// function side(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j]>arr[j+1]) {
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
// console.log(arr);


// }

// side(arr)


// let a=[4,5,6,7,8]                                          // Q-5
// let res=[];
// let Inversion=0;
// function count() {
    
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//         if (a[i]>a[j]) {
//             res.push([a[i],a[j]])
//             Inversion++
//         }
//     }
//   }  
// console.log("Inversion =",Inversion);
// console.log(res);


// }

// count()


// let arr=[4,5,6,7,-2]                                    // Q-6
// let sum=0
// let max=arr[0]

// function large() {

//     for (let i = 0; i < arr.length; i++) {
//         sum=Math.max(arr[i],sum+arr[i])
//         max=Math.max(sum,max)
//     }
//     console.log(max);
    

// }

// large()


// let arr=[1,2,3,4,5]                                       // Q-7
// let arr2=arr.sort((a,b)=>b-a)
// let n=2;
// function nlarge() {
// console.log(arr2[n-1]);

// }

// nlarge()



// let a=[1,2,3,4,5,8]                                   // Q-8
// let b=a.length-1

// function firstandlast() {
    
//     console.log(a[0]);
//     console.log(a[b]);
    

// }

// firstandlast()



//    let str="abcccdffes"                         // Q-9
// let obj={};

// function accurence() {
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]] +=1
//         }else{
//             obj[str[i]] =1
//         }
//     }
// console.log(obj);

// }

// accurence()


// let str="abcccdffes"                                         // Q-10
// let obj={}
// let res=[]
// k=1;

// function oneoccuring() {
//  for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//         obj[str[i]] +=1
//     }else{
//         obj[str[i]]=1
//     }
    
    
// }
//     for(let key in obj){
//    if (obj[key]==k) {
//     res.push(key)
    
// }
// }
// console.log(res);

// }

// oneoccuring()