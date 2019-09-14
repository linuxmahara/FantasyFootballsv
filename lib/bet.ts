require('dotenv').config()
const http = require('superagent')
import * as models from '../models';
import * as database from './database'

export async function createProposal(gameId, pubKey,  amount, message){

}


export async function acceptProposal(proposal_id, pubKey){
 

}


export async function createBet(matchupId, homePubKey, awayPubKey, refPubKey, amount){  

}

export async function createFundingAddress(amount, escrowAddress){



}


export async function updateEscrowStatus(betID){


}

export async function getEscrowUTXOS(address){

}

export async function spendEscrow(winnerAddress, winner_priv, bet_id ){


}
