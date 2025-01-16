const { Pool } = require("pg");

const { DATABASE_HOST,
    DATABASE_USER,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    // DATABASE_PORT
 } = process.env;

module.exports = new Pool ({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD,
    ssl: true
    // port: DATABASE_PORT

});

// const { Pool } = require("pg");

// // Again, this should be read from an environment variable
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });