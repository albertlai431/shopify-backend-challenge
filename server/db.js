const Pool = require("pg").Pool;

//connect to postgres db
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  post: 5432,
  database: "inventory",
});

module.exports = pool;
