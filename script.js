//let b = 40;
//const c = 50;
//if(true){
  //  var a = 10;
    //let b = 20;
    //const c = 30;
    //console.log(b);
//}
//console.log(a);
//console.log(b);
//console.log(c);

// var a = 10;
// var b = "Blue";
// var c;
// var d = true;
// var e = null;
// var f = undefined;
// var g = Symbol("unique");
// var obj = {
//     name: "Asha",
//     age: 25,
//     sex: "Female",
// };
// var arr = [10,20,30];
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof obj);
// console.log(typeof arr);

//functions
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));

// const add = () => {
//     console.log(10+20);
// }
// add();

// var a ='Asha';
// var b = "Blue";
// var c = `${a} ${b} you`;
// console.log(c);

//spread operator
// var arr1 = [10,20,30]
// var arr2 = [...arr1,40,50]
// console.log(arr2);

// var[m1,m2,m3] = [10,20,30]
// var {na,age,sex} = {
//     na: "Asha",
//     age: 25,
//     sex: "Female",
// }
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(na);
// console.log(age);
// console.log(sex);

// var arr = [10,20,30];
// for(var a of arr){
//     console.log(a);
// }
// for(var a in arr){
//     console.log(a);
// }

// var a =10;
// var b = "20";
// console.log(10==20);
// console.log(10==="10");
// console.log(10!==20);
// console.log(10!=="10");
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// var arr = [10,20,30];
// var result = arr.map((a) => a*2);
// console.log(arr);
// console.log(result);

// var arr = [1,2,3,4,5,6];
// var res = arr.filter((val)=>val%2===0);
// console.log(arr);
// console.log(res);

var arr = [1,2,3,4,5,6];
var res = arr.reduce((tot,val)=>tot+val,0);
console.log(arr);
console.log(res);
