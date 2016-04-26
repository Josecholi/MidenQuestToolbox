  // Create mutation observer
  let target = document.getElementById("TsLog")
  let config = { childList: true, subtree: true }

  let observer = new MutationObserver(function(mutations) {
    if (mutations[0].addedNodes !== undefined) {
      tChance()
    }
  })

  observer.observe(target, config)

  // Set up variables
  let t1 = 0,
      t2 = 0,
      t3 = 0,
      t4 = 0,
      t5 = 0,
      actions = 0,
      t1t = 0,
      t2t = 0,
      t3t = 0,
      t4t = 0,
      t5t = 0

  const t1s = ["Plant Stem", "Iron ore", "Pine log", "Tuna"]
  const t2s = ["Cotton", "Silver ore", "Oak log", "Salmon"]
  const t3s = ["Living Leather", "Obsidian ore", "Maple log", "Flyfish"]
  const t4s = ["Silver Vine", "Mythril ore", "Ironwood log", "Marlin"]
  const t5s = ["Nimbus Fruit", "Ethernium ore", "Ygddrasil log", "Dragonfish"]

  // Set up GUI
  $('#Tier1Odds').append('<span id="T1Guess"> Maybe' + t1t.toFixed(1) + "</span>")
  $('#Tier2Odds').append('<span id="T2Guess"> Maybe' + t2t.toFixed(1) + "</span>")
  $('#Tier3Odds').append('<span id="T3Guess"> Maybe' + t3t.toFixed(1) + "</span>")
  $('#Tier4Odds').append('<span id="T4Guess"> Maybe' + t4t.toFixed(1) + "</span>")
  $('#Tier5Odds').append('<span id="T5Guess"> Maybe' + t5t.toFixed(1) + "</span>")

  function tChance(){
    let string = target.innerHTML.substr(0, target.innerHTML.indexOf('('))
    for (let i = 0; i < 4; i++) {
  		if(string.indexOf(t1s[i]) > -1)	{ t1++ }
      if(string.indexOf(t2s[i]) > -1)	{ t2++ }
      if(string.indexOf(t3s[i]) > -1)	{ t3++ }
      if(string.indexOf(t4s[i]) > -1)	{ t4++ }
      if(string.indexOf(t5s[i]) > -1)	{ t5++ }
    }
    actions++

    let t1t = 100 * t1 / actions
    let t2t = 100 * t2 / actions
    let t3t = 100 * t3 / actions
    let t4t = 100 * t4 / actions
    let t5t = 100 * t5 / actions

    $('#T1Guess').text(' Maybe ' + t1t.toFixed())
    $('#T2Guess').text(' Maybe ' + t2t.toFixed())
    $('#T3Guess').text(' Maybe ' + t3t.toFixed())
    $('#T4Guess').text(' Maybe ' + t4t.toFixed())
    $('#T5Guess').text(' Maybe ' + t5t.toFixed())
  }
