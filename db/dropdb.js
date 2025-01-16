#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
DROP TABLE messages;
`;

async function main(){
    console.log("seeding...");
    const client = new Client ({
        // connectionString: "postgresql://postgres:3251lima@localhost:5432/top_users",
        connectionString: "postgres://koyeb-adm:pS9Rn6eEtAgy@ep-summer-rain-a2ma17vn.eu-central-1.pg.koyeb.app/koyebdb?sslmode=require",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("done");
}

main();