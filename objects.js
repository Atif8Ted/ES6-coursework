var dog={
  name:'Buddy',
  breed:"Golden Retriever",
  weight:60,
  bark:function(){
    console.log("Woof woof");
  }
};
console.log(dog);
console.log(dog.breed);
console.log(dog["breed"]);
dog.bark();
