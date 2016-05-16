// Updates the title of the browser page with your current workload
// This lets you idle in the game without having to constantly check back
// When you're not working anymore, the page will alert you
(function () {
  let isWorking = true
  // Grab the name of the player
  const name = document.getElementById('SideName').innerHTML
  // Every 400ms check the page's current workload and upate elements
  setInterval(() => {
    let WL = document.getElementById('prgActionOverlay').innerHTML
    WL = (WL.split(' ')).pop()
    const currentWorkload = WL.split('/')[0]
    document.title = `${currentWorkload} actions left`
    // Alert you only once
    if (currentWorkload.length < 1 && isWorking === true) {
      alert(`Don\'t forget work, ${name} !`)
      isWorking = false
    }
    if (currentWorkload.length > 0 && isWorking === false) {
      isWorking = true
    }
  }, 400)
}())
