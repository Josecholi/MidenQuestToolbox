(function () {
  let currentWorkload = 0
  let max = 0
  let isWorking = true
  setInterval( () => {
    let WL = document.getElementById('prgActionOverlay').innerHTML
    WL = (WL.split(' ')).pop()
    currentWorkload = WL.split('/')[0]
    max = WL.split('/')[1]
    document.title = currentWorkload + "/" + max
    if (currentWorkload.length < 1 && isWorking === true) {
      alert("Don't forget work!")
      isWorking = false
    }
    if (currentWorkload.length > 0 && isWorking === false) {
      isWorking = true
    }
  }, 400)
})()
