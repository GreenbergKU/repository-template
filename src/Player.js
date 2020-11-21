class Player {
  constructor(name, number, position, height, weight, age, school) {
    this.name = name; 
    this.number = number || "#"; 
    this.position = position;
    this.height = height;
    this.weight = weight;
    this.age = age; 
    this.school = school;
  };
}
/*
let data = [
  ["Will Barton", 5, "Gaurd", "6'5", 181, 29, "Memphis"], 
  ["Nikola Jokic", 15, "Center", "7'0", 284, 25, "n/a (Serbia)"],
  ["Jamal Murray", 27, "Gaurd", "6'4", 215, 23, "Kentucky"]
];
let player = new Player(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], data[0][5], data[0][6]);
console.log(data[0].length, player)
*/