/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//lecture 1

/*console.log("Atif Imam");
const limit =200;// doesnt allow value to changed once assigned
const arrays=[1,2,3,4,5,6,7];
arrays.push(30);
console.log(arrays);*/

//lect 2

/*let limit =200;
console.log(limit);

{
	let limit=10;
	console.log('backstage limit',limit);

}
console.log('overall venue limit',limit);
*/
// now var instead of var 

/*var limit =200;
console.log(limit);

{
	var limit=10;
	console.log('backstage limit',limit);

}
console.log('overall venue limit',limit);
*/

//now const instead of var/let

/*const limit =200;
console.log(limit);

{
	const limit=10;
	console.log('backstage limit',limit);

}
console.log('overall venue limit',limit);
*/
//---------------------------------------
//*******template literals
/*let a =`good`;
let greeting=`${a} "morning atif"`;
console.log(greeting);
// different example
let b='Atif';
let c=`Happy birthday ${b}`;
console.log(c);
*/

//-----------------
//*******operating Destructing Assignment *******/

/*no 1 Spread operator*/

/*let a =[20,30,40];
let b=[10,...a,50];
console.log(b);

let c =["Dana","Erik","Frank"];
let d =["Alice","Bob","carl",...c];
console.log(d);
//function with spread operator 
function collect(...e){
	console.log(e);
}

collect(3,6,9,12);
*/
//*********************************************

/* Destructing assignment  on arrays and assignment */
/*let z=[4,5,6];
let four =z[0];
let five=z[1];
console.log(four,five);
//now comes es6
let [elem1,elem2]=z;
console.log(elem1,elem2);
*/

/*let king={name:'Mufasa', kids:1};
/*let name=king.name;
let kid=king.kids;
console.log(name,kid);*/
/*let {name,kids}=king;
console.log(name,kids);
*/ /*
   let son={name:'Simba',parents:2};
   let name,parents;
   ({name,parents}=son);
   console.log(name,parents);
   */

//-------------------------
//************arrow function********
/*setTimeout(function(){
	console.log("Woof Woof")
},3000);

setTimeout(()=>{
	console.log("Woof woof mada");
},3000)

let cheer=()=>{
	console.log("Ahhh! , There you come madafaka -_-");
}
cheer();
*/

//***map helper method

/*let values=[20,30,40];
let double=(n)=>{
	return n*2;
}
let doubled=values.map(double);
console.log(doubled);
*/

/*let values=[20,30,40];
let doubled=values.map((n)=>{
	return n*2;
});
console.log(doubled);*/

/*let values=[20,30,40];
let doubled=values.map((n)=>n*2);
console.log(doubled);
*/
//****filter method
/*let points =[7,6,21,4,3,22,5];
let highscores=points.filter((n)=>{
	return n>15;
});
console.log(highscores);

let lowscores=points.filter((n)=>n<15);
console.log(lowscores);
//builtin helper methods*/
/****string helper method****/
/*let b ="wooh"+"oo".repeat(50);
console.log(b);
console.log("butterfly".startsWith("butter"));
console.log("butterfly".endsWith("butter"));
console.log("butterfly".includes("butter"));
*/
//-------------
/*****checking numbers*/ ///
/*const addToCart=(item,number)=>{
	return Number.isFinite(number);

}
console.log(addToCart("shirt",3));
*/
//isSafeInteger

var addToCart = function addToCart(item, number) {
	return Number.isSafeInteger(number);
};
console.log(addToCart("shirt", Math.pow(2, 101)));

/***/ })
/******/ ]);