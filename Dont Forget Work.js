(function () {
  let isWorking = true
  const name = document.getElementById('SideName').innerHTML
  setInterval(() => {
    let WL = document.getElementById('prgActionOverlay').innerHTML
    WL = (WL.split(' ')).pop()
    const currentWorkload = WL.split('/')[0]
    document.title = `${currentWorkload} actions left`
    if (currentWorkload.length < 1 && isWorking === true) {
      alert(`Don\'t forget work, ${name} !`)
      isWorking = false
    }
    if (currentWorkload.length > 0 && isWorking === false) {
      isWorking = true
    }
  }, 400)
}())
