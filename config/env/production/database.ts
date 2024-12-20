const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
   process.env.DATABASE_URL
 );

export default ({ env }) => ({
  connection: {  
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: env.bool("DATABASE_SSL", false) && {
        ca: env("DATABASE_SSL_CA", undefined),
      },
    },
    debug: false,
  },
});