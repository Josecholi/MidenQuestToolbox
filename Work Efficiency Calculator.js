// The game calculates this behind the scenes, but it's hard to calculate yourself
// This script calculates it for you and outputs it to the GUI in a simple way
(function () {
  // Parse out the numbres the GUI gives us
  let lvl = parseInt(
    document.getElementById('WorkLvl')
    .innerHTML.substr(0, document.getElementById('WorkLvl')
        .innerHTML.indexOf(',')))
  let bonusRes = parseInt(
    document.getElementById('BonusRes')
    .innerHTML.substr(2, document.getElementById('BonusRes')
      .innerHTML.indexOf('%')))

  // Create dropdown div that collects Work Efficiency
  let div = document.createElement("div")
  let WEInput = document.createElement("input")
  div.style.width = "300px"
  div.style.height = "55px"
  div.style.borderRadius = "15px"
  div.style.background = "#d3d3d3"
  div.style.border = "2px solid grey"
  div.style.right = "50%"
  div.style.top = "50px"
  div.style.zIndex = "1000"
  div.style.position = "absolute"
  WEInput.style.fontSize = "22px"
  WEInput.style.position = "relative"
  WEInput.style.top = "10px"
  WEInput.placeholder = "Work Efficiency"
  WEInput.id = "WorkEff"
  WEInput.autofocus = true

  div.appendChild(WEInput)
  document.body.appendChild(div)

  // Collects Work Efficiency
  WEInput.onkeydown = e => {
    if(e.keyCode == 13){
      div.style.display = "none"
      workEff = parseInt(document.getElementById('WorkEff').value)
      calc()
     }
  }

  // The maths that are normally done behind the scenes
  let calc = () => {
    let t1Amount = (lvl + workEff + bonusRes) / 100 + 1
    let t2Amount = t1Amount * 7 / 9
    let t3Amount = t1Amount * 6 / 9
    let t4Amount = t1Amount * 5 / 9
    let t5Amount = t1Amount * 4 / 9

    // Outputs the math to the GUI so it's easy to find
    document.getElementById('Tier1Count').innerHTML = t1Amount.toFixed(1)
    document.getElementById('Tier2Count').innerHTML = t2Amount.toFixed(1)
    document.getElementById('Tier3Count').innerHTML = t3Amount.toFixed(1)
    document.getElementById('Tier4Count').innerHTML = t4Amount.toFixed(1)
    document.getElementById('Tier5Count').innerHTML = t5Amount.toFixed(1)
  }

})();
