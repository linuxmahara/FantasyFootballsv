import * as Sequelize from 'sequelize';
import * as sequelize from '../lib/database';

const Bet = require('./bet')(sequelize, Sequelize);
const Proposal = require('./bet_proposal')(sequelize, Sequelize);
const FantasyTeam = require('./fantasyfootballteam')(sequelize, Sequelize);
const Matchup = require('./matchup')(sequelize, Sequelize);

export {
  Bet,
  Proposal,
  FantasyTeam,
  Matchup
};

