// class node{           
// constructor(data){                                           // Q-1
//     this.data=data
//     this.next=null
// }
// }

// let a=new node(1)
// let b=new node(2)
// let c=new node(3)
// let d=new node(4)
// let temp=new node(10)

// a.next=b
// b.next=c
// c.next=d

// let head=a
// let current= head

// function inserttop(current) {

// if (current!==null) {
//     temp.next=current
//     current=temp
// }

// while (current !==null) {
//     console.log(current.data);
//     current=current.next
// }

// }

// inserttop(current)








// class node{
//     constructor(data){                              // Q-2
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head
    

//     function insertend(current) {
        
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }
//         temp.next=current
//         current=temp
//         console.log(current.data);
// }

// insertend(current)



// class node{
//     constructor(data){                                     // Q-3
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let n=3

//     let head=a
//     let current= head
    
//     function insertnth(current,n) {

//   while (current !==null && current.data !==n) {
 
//       console.log(current.data);
// current=current.next

//   }
//   temp.next=current
//   current=temp
  
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }

//     }

// insertnth(current,n)





// class node{
//     constructor(data){                                       // Q-4
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head
    
//     function removefirst(current) {
        
    

//     if (current!==null) {
//         current=current.next
//     }
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }

//     }

// removefirst(current)


// class node{
//     constructor(data){                                    // Q-5
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head
    

//     function removeend(current,temp) {
        
    

// while (current.next.next!=null) {
//     console.log(current.data);
//     current=current.next
// }
// current.next=null
// head=current

//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }

// }


// removeend(current,temp)






// class node{
//     constructor(data){                            // Q-6
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
//     let n=2
//     let head=a
//     let current= head
    
//     function removekth(current,n) {
        
    

//  while (current.next.next!==null && current.data!==n ) {
//     console.log(current.data);
//     current=current.next
    
//  }

//  current=current.next
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }


//     }

//     removekth(current,n)







// class node{
//     constructor(data){                                    // Q-7
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head
    
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }




// class node{
//     constructor(data){                                              // Q-8
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head

//     function search(current,value) {
//         let position=0
//         while (current!==null) {
//             if (current.data==value) {
//                 console.log("value=",value,"position=",position);
                
//             }
//             current=current.next
//             position++
//         }
//     }

//     search(current,2)





// class node{
//     constructor(data){                      // Q-10
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head


//     function revrselist(current) {
        
//     let arr=[]
    
//     while (current !==null) {
//         arr.push(current.data)
//         current=current.next
//     }

// while (arr.length>0) {
//     console.log(arr.pop());
    
// }

//     }

//     revrselist(current)