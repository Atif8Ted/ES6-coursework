class Animal{
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
king.hello();

export default Animal;

//********Static method in classes
