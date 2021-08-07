import React from 'react'

const Standings = ({games}) => {
  const empty = () => ({'gp':0, 'win':0, 'loss':0, 'tie':0})
    const results = games.reduce((total, game) => {  
    if(!total[game.away]) total[game.away] = empty()
    if(!total[game.home]) total[game.home] = empty()
    let away_result = 'tie', home_result = 'tie' 
    if(game.winner == 'Away'){
      away_result = 'win'
      home_result = 'loss' 
    }
    if(game.winner == 'Home'){
      away_result = 'loss'
      home_result = 'win' 
    }
    total[game.away].gp++
    total[game.home].gp++ 
    total[game.away][away_result]++
    total[game.home][home_result]++  
    return total
  }, {})
  for (const [team, result] of Object.entries(results)) {
    result.pts = (result.win * 2) + result.tie
  }
  let standings = Object.keys(results).map(key => ({ team: key, season: results[key]}))
  standings.sort((a,b) => b.season.pts - a.season.pts)
  console.log(standings)
  return (
    <p>standings component!</p>
  )
}

export default Standings