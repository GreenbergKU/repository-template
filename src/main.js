let allNuggets = []; 

document.onload = setUp(); 

function setUp() {
  const cardSec = document.getElementById("playerCard-sec");
  createPlayers();
  fillRosterList();
  fillGridCard(cardSec);
  goToTop(cardSec.lastElementChild.lastElementChild);
};

function createPlayers() {
  //name, number, position, height, weight, age, school
  let playersData = [
    ["Will Barton", 5, "Gaurd", "6'5", 181, 29, "Memphis"],
    ["Keita Bates-Diop", 6, "Forward", "6'8", 229, 24, "Ohio State"],
    ["Bol Bol", 10, "Center/Forward", "7'2", 220, 21, "Oregon"],
    ["Viarko Cancar", 31, "Forward", "6'8", 236, 23, "San Pablo Burgos"],
    ["Facu Compazzo", "", "Gaurd", "5'10", 194, 29, "n/a (Argentina)"],
    //["Tyler Cook", 25, "Forward", "6'8", 255, 23, "Iowa"],    
    ["Torrey Craig", 3, "Foward", "6'7", 221, 29, "South Carolina Upstate"],
    ["Troy Daniels", 30, "Gaurd", "6'4", 200, 29, "Virginia Commonwealth"],
    ["PJ Dozier", 35, "Gaurd/Forward", "6'6", 205, 24, "South Carolina"],
    ["JaMychal Green", "", "Forward", "6'8", 227, 30, "Alabama"],
    ["Gary Harris", 14, "Gaurd", "6'4", 210, 26, "Michigan State"],
    ["Nikola Jokic", 15, "Center", "7'0", 284, 25, "n/a (Serbia)"],
    ["Paul Millsap", 4, "Forward", "6'7", 257, 35, "Louisiana Tech"],
    ["Monte Morris", 11, "Gaurd", "6'2", 183, 25, "Iowa State"],
    ["Jamal Murray", 27, "Gaurd", "6'4", 215, 23, "Kentucky"],
    ["Zeke Nnaji", "", "Foward/Center", "6'11", 240, 19, "Arizona"],
    ["Michael Porter Jr.", 1, "Forward", "6'10", 218, 22, "Missouri"],
    ["Noah Vonleh", 32, "Forward", "6'10", 257, 25, "Indiana"],
  ]; 
  playersData.forEach(data => allNuggets.push(new Player(data[0], data[1], data[2], data[3], data[4], data[5], data[6])));
  console.log('allNuggets: ', allNuggets);
}

function fillRosterList() {
  let rosterList = document.querySelector(".roster-grid");
  rosterList.innerHTML = "";
  allNuggets.forEach(function(player) {
    let index = allNuggets.indexOf(player);
    //console.log('index: ', index);
    let rosterListHTML = `
      <li id="lp${index}" class="listPlayer">
        <p class="listPlayer-num">${player.number},</p>
        <p class="listPlayer-name">${player.name},</p> 
        <p class="listPlayer-pos">${player.position}</p>
      </li>   
    `;
    rosterList.insertAdjacentHTML("beforeend", rosterListHTML);
  });
}

function fillGridCard(sec) {
  sec.innerHTML = "";
  allNuggets.forEach(function(player) {
    let index = allNuggets.indexOf(player);
  
    let playerCardHTML = `
      <div class="gridCard">
        <div id="pc${index}" class="playerCard">
          <div class="cardTop">
              <image src="./images/roster_mugs/${player.name}.PNG" class="mug-img"></image>
              <img src="${player.schoolImg}" alt="" class="schoolImg"/>
          </div>
          <div class="cardBottom">
            <h2 class="name">${player.name}</h2>
            <span class="inline"><h4>number:</h4><p>${player.number}</p></span>
            <span class="inline"><h4>position:</h4><p>${player.position}</p></span>
            <span class="inline"><h4>height:</h4><p>${player.height}</p></span>
            <span class="inline"><h4>weight:</h4><p>${player.weight}</p></span>
            <span class="inline"><h4>age:</h4><p>${player.age}</p></span>
            <span class="inline"><h4 class="school">school:</h4><p>${player.school}</p></span>
          </div>
        </div>
        <button id="goTopBtn-${index}" class="hidden" onclick="window.location.href='#top'">
          Roster
        </button>
      </div>  
    `;
    sec.insertAdjacentHTML("beforeend", playerCardHTML);
  });
}

function goToTop(sec) {
  sec.classList.toggle("hidden");
  sec.classList.add("goTopBtn", "fixed");
}


