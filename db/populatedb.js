#! /usr/bin/env node

const { Client } = require("pg");


async function main(){
    console.log("seeding...");

const SQL = `

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    author VARCHAR ( 255 ),
    addedDate VARCHAR ( 255 )
);

INSERT INTO messages (text, author, addedDate) 
VALUES
('Text message for seeding', 'Mark Twain', CURRENT_TIMESTAMP);
`;


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