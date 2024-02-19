class Animal{
    constructor(name, type, age, size){
        this.name = !name ? "Unnamed" : name;
        //setter will be called
        this.type = type;
        this.age = age;
        this.size = size;

        this.isEaten = false;
    }

    eat(food){
        if(food instanceof Animal){
            if(this.type == "herbivore"){
                console.log("The animal won't eat the food.")
            }
            else{
                food.isEaten = true;
                console.log("The animal will eat the food");
            }
        }
        else{
            console.log(`The animal will eat ${food}`);
        }
    }


    set type(input){
        if(input == "carnivore" || input == "herbivore" || input == "omnivore"){
            this._type = input;
        }
        else{
            this._type = "herbivore";
        }
    }

    get type(){
        return this._type;
    }

}

let firstAnimal = new Animal("first Animal", "herbivore", 3, 10);
let secondAnimal = new Animal("second Animal", "carnivore", 5, 12);
let thirdAnimal = new Animal("third Animal", "omnivore", 3, 10);

firstAnimal.eat(secondAnimal);

thirdAnimal.eat(secondAnimal);

firstAnimal.eat("grass");

