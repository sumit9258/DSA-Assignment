
// class node{
//     constructor(data){                       // Q-1
//         this.data=data
//         this.next=null
//     }
//     }
     
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(2)
//     let e=new node(1)

//     a.next=b
//     b.next=c
//     c.next=d
//     d.next=e
    
//     let head=a
//     let current= head
//     let arr=[]
// let res1=""

// function checkpailandrome(curent) {
    
    
//     while (current!=null) {
//         arr.push(current.data)
//         res1+=current.data
//         current=current.next
//     }

//     // console.log(res1);

//     let i=arr.length-1
// let res=""
// while (i>=0) {
    
// res+=arr[i]
// i--;
// }

// // console.log(res);

// if (res==res1) {
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }
// }

// checkpailandrome(current)




















// function getIntersectionNode(headA, headB) {                         // Q-2
//     if (!headA || !headB) return null;

//     let tempA = headA;
//     let tempB = headB;

//     while (tempA !== tempB) {
//         tempA = tempA ? tempA.next : headB;
//         tempB = tempB ? tempB.next : headA;
//     }

//     return tempA;
// }


// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);
// let node5 = new ListNode(5);
// let node6 = new ListNode(6);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;

// let nodeA1 = new ListNode(7);
// let nodeA2 = new ListNode(8);
// nodeA1.next = nodeA2;
// nodeA2.next = node3; 

// let headA = nodeA1; 
// let headB = node1;  
// let intersectionNode = getIntersectionNode(headA, headB);
// console.log(intersectionNode ? intersectionNode.val : "No intersection");
