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
*//*
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
/*****checking numbers*////
/*const addToCart=(item,number)=>{
	return Number.isFinite(number);

}
console.log(addToCart("shirt",3));
*/
//isSafeInteger

/*const addToCart=(item,number)=>{
	return Number.isSafeInteger(number);

}

//*************IMPORT and EXport modules*///////
/*console.log(addToCart("shirt",Math.pow(2,101)));*/
/*import {fellowship,total} from "./fellowship";
import {add,multiply} from "./math"
console.log(fellowship);
console.log(total);
console.log(add(5,10));
console.log(multiply(5,10));
import multiply from "./math";
console.log(multiply(5,10));*/

//****************Classes

/*class Animal{
	constructor(name,height){
		this.name=name;
		this.height=height;

	}
	hello(){
		console.log(`Hi I am ${this.name} from fucking zoo`);
	}
}
let king=new Animal("Giraffee",15.8);
console.log(king);
king.hello();*/

//*****Inheritance*//*
/*
import Animal from "./animal";
class Lion extends Animal{
	constructor(name,height,color){
		super(name,height);
		this.color=color;
	}
	hello(){
		console.log(`Hello ${this.name}  form nowhere`);

	}

}
let son =new Lion("Simba",2,"Fucking brown");
console.log(son);
son.hello();
*/


//**** static methods in classes
/*
class Calculator{
	static multiply(a,b){
		return a*b;
	}

	static add(a,b){
		return a+b;
	}
}

let a=Calculator.multiply(5,7);
console.log(a);

let b=Calculator.add(5,7);
console.log(b);

*/
//*********Classes and prototypes

/*function Wizard(name,house,pet){
	this.name=name;
	this.house=house;
	this.pet=pet;
	this.greet=()=>`I am ${this.name} from ${this.house}`;
	
}
Wizard.prototype.pet_name;
let harry=new Wizard("Harry Porter","Gryffindor","Ownl");

harry.pet_name="Aaloo";
console.log(harry.greet());
console.log(harry);
Wizard.prototype.info=function(){
	return `I have a ${this.pet} named ${this.pet_name}`;
}
console.log(harry.info());*/

//*****Data Structures in ES6

/***** Set */

/*let a =new Set();
a.add(5);
a.add(43);
a.add("Woof woof");
a.add({x:50,y:200});
console.log(a);
console.log(a.size);
console.log(a.has(5));
console.log(a.has(7));
/* converting arrays to set

let numbers =[5,7,9,13,17,17];

let numSet=new Set(numbers);
console.log(numSet);

for (let element of numSet.values()){
	console.log(element);
}

/* converting string into arrays and then to set

let chars='kadakdksfnooueioehoieksndlksnmcs dlkwnd';

let chars_arr=chars.split("");
console.log(chars_arr);
let char_set=new Set(chars_arr);
console.log(char_set);
*/

//*** Maps 
/*

let a= new Map();
let key_1="String key";
a.set(key_1,'return value of the string key');
console.log(a);

let key_2 ={a:'key'};
a.set(key_2,'return value for an object key');

console.log(a);

let key_3 =function(){};
a.set(key_3,'return value for a function key');

console.log(a);

let numArr=[[1,'one'],[2,'two']];
let valmap=new Map(numArr);
console.log(valmap);

for(let [key,value] of valmap.entries()){
	console.log(`${key} points to ${value}`);
}

let string="dkksdkahfkahkfkafjwi3wugreofJWBFJDBJAG";
let letters =new Map();
console.log(letters);
for(let i=0;i<string.length;i++){
	let letter=string[i];
	if(!letters.has(letter)){
		letters.set(letter,1);
	}
	else{
		letters.set(letter,letters.get(letter)+1);
	}
}
console.log(letters);*/

//******Closures and Scoping 

