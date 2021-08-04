const fs = require('fs')

// saved the jpeg to drive and then opened with docs
// removed formatting, ensure 4 per row, added %20
const raw = `
LEMONHEADS Diamond%20Heist TBW GasVills
LEMONHEADS GasVills TBW Diamond%20Heist
LEMONHEADS TBW GasVills Diamond%20Heist
Diamond%20Heist LEMONHEADS GasVills TBW
Diamond%20Heist GasVills TBW LEMONHEADS
Diamond%20Heist TBW GasVills LEMONHEADS
LEMONHEADS Diamond%20Heist TBW GasVills
LEMONHEADS GasVills TBW Diamond%20Heist
LEMONHEADS GasVills TBW Diamond%20Heist
Diamond%20Heist LEMONHEADS GasVills TBW
Diamond%20Heist GasVills TBW LEMONHEADS
PLAYOFFS ROUND%201 PLAYOFFS ROUND%201
PLAYOFFS FINALS GLOVE%20TOSS GLOVE%20TOSS
`
// split the raw text by new line
const weeks = raw.split(/\n/g)

// ignore the first and last
weeks.pop()
weeks.shift()

ndjson = weeks.map((week, i) => {
  // create a new week
  // game 1, game 2
  return `week ${i + 1}` 
}).join('\n')

const content = ndjson//`weeks: ${ndjson.length}\n${ndjson}`

fs.writeFile('./schedule.ndjson', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})