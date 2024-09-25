let dog = {
    name : "Aflac",
    numLegs : 4,
    sayLegs : () => {
        return `This dog has ${this.numLegs} legs`;
    }
  };
  
  console.log( dog.name, dog.numLegs);
  dog.sayLegs();