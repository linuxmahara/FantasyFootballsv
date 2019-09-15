'use strict';

const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Path = require('path');

import * as handler from '../../handlers'

import * as Joi from 'joi';

require('dotenv').config()

// Start the server
const start =  async function() {


  // Create a server with a host and port
  const server= await Hapi.server({
    host:'0.0.0.0',
    port:3000,
    routes: {
      cors: true,
      files:{

      relativeTo: Path.join(__dirname, '../../front-end/build')

      }

    }
  });
  

  await server.register(require('inert'));
  await server.register(require('vision'));
  await server.register({
    plugin: HapiSwagger,
    options: {
      info: {
        title: 'Sports Oracle Documentation',
        version: '0.0.1',
      },
    }
  })

 server.route({ 
    method:'GET',
    path:'/api/matchups/{week}/{leagueId}',
	handler: handler.getWeeklyMatchups,
    options: {
      tags: ['api'],
      notes: 'Returns Matchup for the given game ',
      description: 'get weekly matchup',
    }
  })

  server.route({ 
    method:'GET',
    path:'/api/teams/{leagueId}',
	handler: handler.getFantasyTeams,
    options: {
      tags: ['api'],
      notes: 'Returns Matchup fantasy teams for the week ',
      description: 'get weekly teams',
    }
  })


 server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
	   directory:{
		path: '.',
		redirectToSlash: true,
		index: true,
	   }

	}

  })

    try {
      await server.start();
      console.log('Server running at: ', server.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

};

if (require.main === module) {
  start();
}
