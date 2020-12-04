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
  //new Player(name, number, position, height, weight, age, school, NBAnum, SPOTnum)
  let playersData = [
    ["Will Barton", 5, "Gaurd", "6'5", 181, 29, "Memphis", 203115, ""],
    //["Keita Bates-Diop", 6, "Forward", "6'8", 229, 24, "Ohio State"],
    ["Bol Bol", 10, "Center/Forward", "7'2", 220, 21, "Oregon", 1629656, 31603],
    ["Viarko Cancar", 31, "Forward", "6'8", 236, 23, "San Pablo Burgos", 1628427, ""],
    ["Facu Compazzo", "", "Gaurd", "5'10", 194, 29, "n/a (Argentina)", "", ""],
    //["Tyler Cook", 25, "Forward", "6'8", 255, 23, "Iowa"],    
    ["Torrey Craig", 3, "Foward", "6'7", 221, 29, "South Carolina Upstate", 1628470, ""],
    ["Troy Daniels", 30, "Gaurd", "6'4", 200, 29, "Virginia Commonwealth", 203584, ""],
    ["PJ Dozier", 35, "Gaurd/Forward", "6'6", 205, 24, "South Carolina", 1628408, ""],
    ["JaMychal Green", "", "Forward", "6'8", 227, 30, "Alabama", 203210, ""],
    ["RJ Hampton", "", "Gaurd", "6'4", 175, 19, "New Zealand Breakers", 1640181, ""],
    ["Gary Harris", 14, "Gaurd", "6'4", 210, 26, "Michigan State", 203914, ""],
    ["Nikola Jokic", 15, "Center", "7'0", 284, 25, "n/a (Serbia)", 203999, ""],
    ["Paul Millsap", 4, "Forward", "6'7", 257, 35, "Louisiana Tech", 200794, ""],
    ["Monte Morris", 11, "Gaurd", "6'2", 183, 25, "Iowa State", 1628420, ""],
    ["Jamal Murray", 27, "Gaurd", "6'4", 215, 23, "Kentucky", 1627750, ""],
    ["Zeke Nnaji", "", "Foward/Center", "6'11", 240, 19, "Arizona", 1630192, ""],
    ["Michael Porter Jr.", 1, "Forward", "6'10", 218, 22, "Missouri", 1629008, ""],
    ["Noah Vonleh", 32, "Forward", "6'10", 257, 25, "Indiana", 203943, ""],
    ["Greg Whittington", "", "Forward", 210, 27, "6'9", "Georgetown", 204222, 18173],
  ]; 
  playersData.forEach(data => allNuggets.push(new Player(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8])));
}

function fillRosterList() {
  let rosterList = document.querySelector(".roster-grid");
  rosterList.innerHTML = "";
  allNuggets.forEach(function(player) {
    let index = allNuggets.indexOf(player);
    let rosterListHTML = `
      <div id="lp-${index}" class="listPlayer">
        <p class="listPlayer-num">${player.number},</p>
        <p class="listPlayer-name">
          <a href="#pc-${index}">${player.name},</a> 
        </p>
        <p class="listPlayer-pos">${player.position}</p> 
      </div>
    `;
    rosterList.insertAdjacentHTML("beforeend", rosterListHTML);
  });
}

function fillGridCard(sec) {
  sec.innerHTML = "";
  allNuggets.forEach(function(player) {
    let index = allNuggets.indexOf(player);
    let hyphName = player.convertName(player.name);
    let playerCardHTML = `
      <div class="gridCard">
        <div id="pc-${index}" class="playerCard">
          <div class="cardTop">
              <image src="./images/roster_mugs/${player.name}.PNG" class="mug-img"></image>
              <image src="" alt="" class="schoolImg">
          </div>
          <div class="cardBottom">
            <h2 class="name">${player.name}</h2>
            <span class="inline"><h4>number:</h4><p>${player.number}</p></span>
            <span class="inline"><h4>position:</h4><p>${player.position}</p></span>
            <span class="inline"><h4>height:</h4><p>${player.height}</p></span>
            <span class="inline"><h4>weight:</h4><p>${player.weight}</p></span>
            <span class="inline"><h4>age:</h4><p>${player.age}</p></span>
            <span class="inline"><h4 class="school">school:</h4><p>${player.school}</p></span>
            <div class="pc-btn-wrapper">
              <button onclick="window.location.href='https://www.nba.com/stats/player/${player.NBAnum}/';" id="pc-playerStats${index}-btn" class="pc-btn">P S
              </button>
              <button onclick="window.location.href='https://www.nba.com/player//${player.NBAnum}/${hyphName}';" id="pc-bio${index}-btn" class="pc-btn">BIO               
              </button>
              <button onclick="window.location.href='https://www.spotrac.com/nba/denver-nuggets/${hyphName}-${player.SPOTnum}/';" id="pc-salary${index}-btn" class="pc-btn">$$$                
              </button>
            </div>
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
