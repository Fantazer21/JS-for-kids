// Chapter 3
//Task 1 

let ranBd = ["Face", "Nose", "Hair"];
let ranAnBdP = ["Tail", "Foot", "Fur"]
let ranAdj = ["Smelly", "Boring", "Stupid"];
let ranAnim = ["Fly", "Marmot", "Monkey", "Rat"];

var randomBodyPart = ranBd[Math.floor(Math.random() * ranBd.length)];
var randomAnimalBodyPart = ranAnBdP[Math.floor(Math.random() * ranAnBdP.length)];
var randomAdjective = ranAdj[Math.floor(Math.random() * ranAdj.length)];
var randomAnimal = ranAnim[Math.floor(Math.random() * ranAnim.length)];

var randomInsult = `Your ${randomBodyPart} is more ${randomAdjective} than a ${randomAnimal}'s ${randomAnimalBodyPart} `
 console.log(randomInsult)