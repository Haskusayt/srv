let gem = document.querySelector('.gem-cost')
let gemsperclick = 1
let clickerCost = document.querySelector('.clicker-cost')
let standartcost = 10

function incrementGem() {
  gem.innerHTML = parseFloat(gem.innerHTML) + gemsperclick
}

function buyClick() {
  if (parseFloat(gem.innerHTML) >= standartcost) {
    parseFloat(gem.innerHTML) -= standartcost
    standartcost = standartcost ^ 2
    gemsperclick += 1
    clickerCost = standartcost
  }
}
