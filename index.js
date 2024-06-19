let gem = document.querySelector('.gem-cost')
let gemsperclick = 1
let clickerCost = document.querySelector('.clicker-cost')

function incrementGem() {
  gem.innerHTML = parseFloat(gem.innerHTML) + gemsperclick
}

function buyClick() {
  if (parseFloat(gem.innerHTML) >= clickerCost.innerHTML) {
    gem.innerHTML -= clickerCost.innerHTML
    gemsperclick += 1
  }
}
