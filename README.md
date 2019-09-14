# Fantasy Football SV 
Fantasy Football SV is a fantasy football application that uses the Bitcoin SV blockchains as the backend.

## MVP

This application imports espn fantasy football league data and provides an interface for users to bet on individual matchups

Using `moneybutton.com` the app will construct bitcoin transaction to post the bet to the blockchain.

This is all hidden from the user and all they will see is a `moneybutton` button to swipe

### API 

run api with 

`npm start`

endpoints

returns matchups for week 1 for league 272466

`http://0.0.0.0:3000/api/matchups/1/272466`

returns teams for leage 2724666
`http://0.0.0.0:3000/api/teams/272466`


### Config

`DATABASE_URL`

`AMQP_URL`

`ESPN_S2`

`SWID`

`CLIENT_IDENTIFIER`

`CLIENT_SECERET`

`OAUTH_CODE`

`REDIRECT_URI`
