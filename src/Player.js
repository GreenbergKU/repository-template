class Player {
  constructor(name, number, position, height, weight, age, school, NBAnum, SPOTnum) {
    this.name = name; 
    this.number = number || "#"; 
    this.position = position;
    this.height = height;
    this.weight = weight;
    this.age = age; 
    this.school = school;
    this.mug = `${this.name}.PNG`;
    this.NBAnum = NBAnum || null;
    this.SPOTnum = SPOTnum || null;
    //this.schoolImg = `${this.school}.PNG`;
  };

  convertName(name) {
    return name.toLowerCase().split(" ").join("-");
  }
}