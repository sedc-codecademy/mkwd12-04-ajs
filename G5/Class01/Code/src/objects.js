function Dog(name, color, age, favoriteFood) {
    this.name = name === undefined ? "unnamed" : name; // in case there is no name
    this.color = color;
    this.age = age;
    this.hasOwner = false; // default value for all
    this.favoriteFood = favoriteFood;
    this.bark = function () {
      console.log("BARK BARK BARK");
    };
    this.eat = function (food) {
      dog.favoriteFood.forEach(fav =>
          fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
      console.log("NOM NOM NOM");
    }
  }
  
  let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
  console.log(sparky);
  let doggy = new Dog();
  console.log(doggy);