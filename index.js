// ######################## CLOUSERS START #######################
// console.log(num)
// console.log(display)
// var num = 1;

// function display() {
//   console.log("Inside First Function");
//   var count = 10;
//   for(let i = 1; i <= 5; ){
//     console.log("2 x "+i+" = "+2*i);
//       i+=1;
//   }
//   return function a() {
//     console.log("Inside Second Function");
//     console.log((count += 10));
//     let c = 50;
//     function b() {
//       console.log("Inside Third Function");
//       var f = c + count;
//       console.log(f)
//     }
//     return b()
//   }
// }
// display()();
// let x = display();
// console.log(x)
// x();
// display();
// x();
// function printAfterOneSec(){
//   for(var i = 1; i <= 5; i++){
//     function close(x){
//       setTimeout(function (){
//         console.log(x);
//       },x * 1000);
//     }
//     close(i);
//   }
// }
// function printAfterOneSec(){
//   for(var i = 1; i <= 3; i++){
//     setTimeout(function (){
//       console.log(i);
//     },i * 1000);
//   }
// }
// printAfterOneSec()
// function a(){
//   var i =0;
//    return function b(){
//     var x = 10
//   }
// }
// ################################## Asynchronorous ############################################
// setTimeout(function () {
//   console.log("this is TimeOut");
// }, 3000);
// function a(b) {
//   console.log("this is a");
//   b();
// }
// a(function b() {
//   console.log("this is b");
// });
// ################################### promosies #################################################
// let mypromise = new Promise(function (myResolve, myReject) {
//   let m = 0;
//   if (m == 0) {
//     console.myResolve("ok");
//   } else {
//     console.myReject("error");
//   }
// });
// mypromise.then();

// ################################## Function Reuseibility #######################################
// const radius = [2, 1, 4, 3];

// const area = function(num){
//   return Math.PI * num * num;
// }
// const circumference = function (num){
//   return 2 * Math.PI * num;
// }
// const diameter = function(num){
//   return num * num;
// }
// const calculate = function (arr , logic) {
//   const result = [];
//   for(let i = 0; i <= arr.length; i++){
//   result.push(logic(arr[i]));
//   }
//   return result;
// }
// // console.log(radius.map(diameter))      //map
// console.log('Givin Radius are :' , radius);
// console.log('Area is : ');
// console.log(calculate(radius , area));
// console.log('Circumferencs is : ');
// console.log(calculate(radius , circumference));
// console.log('Diameter is :');
// console.log(calculate(radius , diameter));
//######################################### Linked List ###################################
// class node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }
// class LL {
//   constructor() {
//     this.head = null;
//   }
// }
const array = [9, 1, 2, 32, 3, 4, -1];
// ################################################# reduce
// function maximum(arr){
//   let maxVal = 0;
//   for (let i = 0; i < array.length; i++) {
//     if(maxVal < arr[i]){
//       maxVal = arr[i];
//     }
//   }
//   return maxVal;
// }
// const output = array.reduce((max , curr) =>{
//   if(curr > max){
//     max = curr;
//   }
//   return max;
// } , 0);
// console.log(output);
// console.log(maximum(array));
// ####################################################### filter
// const output = array.filter((x)=> x > 3);
// console.log(output);
