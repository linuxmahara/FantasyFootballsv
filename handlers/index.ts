import * as bet from '../lib/bet'

import * as api from '../lib/api'

export async function getFantasyTeams(req){

  try{

    return await api.getFantasyTeams(req.params.leagueId)

  }catch(error){
    console.log(error)
  }


}

export async function getWeeklyMatchups(req){

  try{

    return await api.getWeeklyMatchups(req.params.week, req.params.leagueId)

  }catch(error){
    console.log(error)
  }


}


