// const arr=[1,2,3,4,5]
// let res=[]
// function a(arr) {
//     for (let i = arr.length-1; i >=0; i--) {
//         res.push(arr[i])
//     }
//     console.log(res);
    
// }

// a(arr)



// const arr=[1,2,3,4,5]

// let max=0
// let min=arr[0]

// function maxx(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max=arr[i]
//         }else if(min>arr[i]){
// min=arr[i]
//         }
//     }
//     console.log(max,min);
    
// }

// maxx(arr)


// const arr=[4,5,1,2,3]
// let k=5
// function kthmax(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j]<arr[j+1]) {
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }

//     console.log(arr[k-1]);
    
// }

// kthmax(arr)




// let arr = [-1, 1, 1,-2, 1];
// function move(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j]>arr[j+1]) {
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     console.log(arr);
    
// }

// move(arr)



// let arr = [1, 0, 3, 1, 1, 1, 0, 0, 3, 3, 0, 1]
// let a0=0
// let a1=0
// let a3=0

// function count(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===0) {
//             a0++
//         }else if(arr[i]==1){
//             a1++
//         }else if(arr[i]==3){
//             a3++
//         }
//     }

//     console.log(a0,a1,a3);
    

//     for (let j = 0; j < arr.length; j++) {
//         if (a0>0) {
//             arr[j]=0
//             a0--
//         }else if(a1>1){
//             arr[j]=1
//         a1--
//         }else if(a3>3){
//             arr[j]=3
//         a3--
//         }
//     }
// console.log(arr);

// }

// count(arr)


// let arr=[-2,1,-3,4,-1,2,1,-5,4]
// let min=0
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         min=Math.max(arr[i],min+arr[i])
//         max=Math.max(min,max)
//     }
//     console.log(max);
    
// }
// findsub(arr)



// const arr1=[2,5,9,6,3,8,9,7,1]
// let res=[]
// let arr=arr1.sort()
// function duplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==arr[i+1]) {
//             res.push(arr[i])
//         }
//     }
//     console.log(res);
    
// }

// duplicate(arr)




// const arr1 = [1, 3, 5, 7];
// const arr2 = [0, 2, 6, 8, 9];

// let arrn1=arr1.length
// let arrn2=arr2.length

// function a() {
// let i=0
// let j=0
// while(i<arrn1){
//     if (arr1[i]>arr2[j]) {
//         [arr1[i],arr2[j]]=[arr2[j],arr1[i]]
//     }
//     i++
// }
// console.log([...arr1,...arr2].sort());

// }

// a()



// const arr = [8, 4, 2, 1];
// let count=0
// let res=[]
// function repeat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i]>arr[j]) {
//                 res.push([arr[i],arr[j]])
//             count++
//             }
//         }
//     }
//     console.log(res,count);
    
// }

// repeat(arr)


// const arr = [7, 1, 5, 3, 6, 4]
// let maxprofit=arr[0]
// let pro=0

// function buysell(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       maxprofit =Math.min(maxprofit,arr[i])
//       let profit=arr[i]-maxprofit
//      pro=Math.max(profit,pro)
//     }
//     console.log(pro);
    
// }

// buysell(arr)




// const arr = [7, 1, 5, 3, 6, 4];
//  const k = 10;

//  function equal(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i]+arr[j]==k) {
//                 console.log(arr[i],arr[j]);
                
//             }
//         }
//     }
//  }

//  equal(arr)



// const arr1 = [7, 1, 5, 3, 6, 4];
// const arr2 = [1, 3, 6, 8, 3, 0];
// const arr3 = [1, 3, 9, 1, 2, 0];

// let a1=new Set(arr1)
// let a2=new Set(arr2)
// let a3=new Set(arr3)

// let a=[...a1].filter((ele)=>a1.has(ele)&&a2.has(ele)&&a3.has(ele))
// console.log(a);





// const arr = [7, 4, 4, 4, 6];
// let min=arr[0]
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2!==0){
//         min=Math.max(arr[i],min+arr[i])
//         max=Math.max(min,max)
//     }
// }
//     console.log(max);
    
// }
// findsub(arr)



// const arr = [1, 2, 4, 5, 6, 2];
// let min=0
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         min=Math.max(arr[i],min+arr[i])
//         max=Math.max(min,max)
//     }
//     console.log(max);
    
// }
// findsub(arr)




// const arr = [1, 2, 4, 5, 6, 2];
// let min=0
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         min=Math.max(arr[i],min*arr[i])
//         max=Math.max(min,max)
//     }
//     console.log(max);
    
// }
// findsub(arr)





// const arr1=[[1,2,3],[4,5,6,7],[8,9,10]]

// let arr=arr1.flat()
// let k=3
// let a=arr.sort((a,b)=>b-a)
// console.log(a[k-1]);




// const arr1=[1,2,3,9,3,5,2]
// let arr=arr1.sort()
// let res=[]

// function removedup(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr.includes(arr[i],i+1)) {
//             res.push(arr[i])
//         }
//     }
//     console.log(res);
    
// }

// removedup(arr)



// const arr=[1,2,3,5]

// function first(arr) {
//     console.log(arr[0]);
// console.log(arr[arr.length-1]);

// }

// first(arr)


// const arr1=[1,2,3,5];
// let n=5;
// let sum=0
// let a=n*(n+1)/2

// for (let i = 0; i < arr1.length; i++) {
//     sum+=arr1[i]
// }
// console.log(a-sum);



// let n1=[[1],[2]]
// let n2=[3,[4,5]];

// let a=[...n1,...n2].flatMap((ele)=>ele)

// console.log(a);



//  let str1 ='aafffeeeeccc'

//  let obj={}
// let arr=[]
//  function findOccuring(str1) {
//     for (let i = 0; i < str1.length; i++) {
//         if (obj[str1[i]]) {
//             obj[str1[i]]+=1
//         }else{
//             obj[str1[i]]=1
//         }
//     }

//     for (const key in obj) {
//         arr.push(key,obj[key])
//     }
    
//     console.log(arr.join(""));
    
//  }

//  findOccuring(str1)





//  let str1 = [1, 1,1, 2, 2,3,3,3,4 ];
//  let obj={}
//  function findOccuring(str1) {
//     for (let i = 0; i < str1.length; i++) {
//         if (obj[str1[i]]) {
//             obj[str1[i]]+=1
//         }else{
//             obj[str1[i]]=1
//         }
//     }

//     for (const key in obj) {
//         if (obj[key]!==2) {
//             console.log(key);
            
//         }
//     }
    
    
//  }

//  findOccuring(str1)





// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let target = 6


// function binary(arr,target) {
//     let start=0
//     let end=arr.length-1
//     let i=0
//     while(i<=end){
// let mid=Math.floor((start+end)/2)

// if (arr[mid]==target) {
//     return mid
// }else if(arr[mid]<target){
// start=mid+1
// }else{
//     end=mid-1
// }
//     }
//     return -1
// }

//  console.log(binary(arr,target))



//  let str1="hello world hello"
// let str=str1.split(" ")
// let obj={}
// function repeat() {

//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]]+=1
//         }else{
//             obj[str[i]]=1
//         }
//     }

//     for (const key in obj) {
//         if (obj[key]>1) {
//             console.log(key);
            
//         }
//     }


// }

// repeat()



// let arr=[2,7,11,15]
// let target=9

// function sum(arr,target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i]+arr[j]==target) {
//                 console.log([i,j]);
                
//             }
//         }
//     }
// }

// sum(arr,target)



// let str1="abccccdd"
// let str=str1.split("")
// let length=0
// let obj={}
// let flag=false


// function maxlength() {
//    for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//         obj[str[i]]+=1
//     } else {
//         obj[str[i]]=1
//     }

//     for (const key in obj) {
//         if (obj[key]%2==0) {
//             length+=obj[key]
//         }else{
//             length=obj[key]-1
//             flag=true
//         }
//         }
//     if (flag) {
//         length++
//     }
//     }

// console.log(length);

//    } 
// maxlength()



