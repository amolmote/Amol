/*

A promise in node means an action which will either 
resolve or reject..
in case complition promise is kept otherwise broken


*/
// function show(a){
//     console.log(a);
// }


// var t=new Promise((resolve,reject)=>{
//     var x=0;

//     if(x == 0){
//         resolve("all ok");
//     }
//     else{
//         reject("error")
//     }
// })

//by arrow function

// t.then((value)=>{
//     show(value)
// }).catch((error)=>{
//     show(error);
// })



// let x = new Promise((resolve,reject)=>{
//     resolve("this promise is resolved")
// }).then((result)=>{
//     console.log(result)
// }).then(()=>{
//     console.log("this is second then called chaining");
// })

// let x = new Promise((resolve,reject)=>{
//     let x = 10;
//     resolve(x);
// }).then((result)=>{
//     var y = result + 10;
   
//     console.log(y);
  
// }).then(()=>{
  
//     console.log("this is 2nd then");
// })

//another example of promise
let x = new Promise((resolve,reject)=>{
    let arr = [];
    for(let i = 0 ; i < 10 ; i++){
        arr.push(i);
    }
    console.log(arr.length);
    resolve(arr);
}).then((result)=>{
  
   if(result.length == 10){
    console.log(result);
   }
    
  
}).then(()=>{
  
    console.log("this is 2nd then");
})