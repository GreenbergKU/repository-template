let allNuggets = []; 
let player = new Player;

let playersData = [
  ["Will Barton", 5, "Gaurd", "6'5", 181, 29, "Memphis"],
  ["Keita Bates-Diop", 6, "Forward", "6'8", 229, 24, "Ohio State"],
  ["Bol Bol", 10, "Center/Forward", "7'2", 220, 21, "Oregon"],
  ["Viarko Cancar", 31, "Forward", "6'8", 236, 23, "San Pablo Burgos"],
  ["Tyler Cook", 25, "Forward", "6'8", 255, 23, "Iowa"],
  ["Torrey Craig", 3, "Foward", "6'7", 221, 29, "South Carolina Upstate"],
  ["PJ Dozier", 35, "Gaurd/Forward", "6'6", 205, 24, "South Carolina"],
  ["Garry Harris", 14, "Gaurd", "6'4", 210, 26, "Michigan State"],
  ["Nikola Jokic", 15, "Center", "7'0", 284, 25, "n/a (Serbia)"],
  ["Monte Morris", 11, "Gaurd", "6'2", 183, 25, "Iowa State"],
  ["Jamal Murray", 27, "Gaurd", "6'4", 215, 23, "Kentucky"],
  ["Zeke Nnaji", "", "Foward/Center", "6'11", 240, 19, "Arizona"],
  ["Michael Porter Jr.", 1, "Forward", "6'10", 218, 22, "Missouri"],
  ["Noah Vonleh", 32, "Forward", "6'10", 257, 25, "Indiana"],
]; 

document.onload = createPlayers();

function createPlayers() {
  //name, number, position, height, weight, age, school

  console.log(playersData.length, playersData[0]);
  //new Player(playersData[0])
  playersData.forEach(function(data) { 
    allNuggets.push(new Player(data[0], data[1], data[2], data[3], data[4], data[5], data[6]));
    //allNuggets.push(player);  
  });

  console.log('allNuggets: ', allNuggets);
}
                 