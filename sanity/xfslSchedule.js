const fs = require('fs')
const dayjs = require('dayjs')

// saved the jpeg to drive and then opened with docs
// removed formatting, ensure 4 per row, added %20
const raw = `
7 8 LEMONHEADS Diamond%20Heist TBW GasVills
7 15 LEMONHEADS GasVills TBW Diamond%20Heist
7 22 LEMONHEADS TBW GasVills Diamond%20Heist
7 29 Diamond%20Heist LEMONHEADS GasVills TBW
8 5 Diamond%20Heist GasVills TBW LEMONHEADS
8 12 Diamond%20Heist TBW GasVills LEMONHEADS
8 19 LEMONHEADS Diamond%20Heist TBW GasVills
8 26 LEMONHEADS GasVills TBW Diamond%20Heist
9 2 LEMONHEADS TBW GasVills Diamond%20Heist
9 9 Diamond%20Heist LEMONHEADS GasVills TBW
9 16 Diamond%20Heist GasVills TBW LEMONHEADS
`
const playoffs = `
9 23 PLAYOFFS ROUND%201 PLAYOFFS ROUND%201
9 30 PLAYOFFS FINALS GLOVE%20TOSS GLOVE%20TOSS
`
// split the raw text by new line
const weeks = raw.split(/\n/g)

// ignore the first and last
weeks.pop()
weeks.shift()
// console.log(weeks)
ndjson = weeks.map((week, i) => {
  // create a new week
  const [m, d, a1, h1, a2, h2] = week.split(' ').map(game => game.replace('%20', ' '))
  const [mm, dd] = [m,d].map(num => num.padStart(2,'0'))
  // console.log(games)
  // game 1, game 2
  const date = `2021-${mm}-${dd}`
  return `{"_type" : "game", "name" : "Week ${i+1}", "datetime" : "${dayjs(date).hour(18).minute(30).toISOString()}", "away": ["${a1}"], "home": ["${h1}"]}
{"_type" : "game", "name" : "Week ${i+1}", "datetime" : "${dayjs(date).hour(20).minute(30).toISOString()}", "away": ["${a2}"], "home": ["${h2}"]}` 
}).join('\n')

const content = ndjson//`weeks: ${ndjson.length}\n${ndjson}`

const today = dayjs().format('YYYY-MM-DD')

fs.writeFile(`./schedule-${today}.ndjson`, content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

// datetime
// june 1 8:30 am
// utc offset is +4 hours so might need dayjs to figure this out too
// 2021-06-01T12:30:00.000Z
