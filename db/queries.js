const pool  = require("./pool");

async function getAllMessages(){

    try {
        const { rows } = await pool.query("SELECT * FROM messages");
        console.log('This is messages in SQL function: ', rows)
        return rows;

    } catch {
        console.log('No messages to dispay!')
        return null;
    }
    


}

async function insertMessage (message){

    await pool.query(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    author VARCHAR ( 255 ),
    addedDate VARCHAR ( 255 )
    )`);

    await pool.query("INSERT INTO messages (text, author, addedDate) VALUES ($1, $2, $3) ", [message.text, message.author, message.added]);
    
}

async function getMessageById (id){

    try {
        const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [id]);
        return rows[0];

    } catch {
        return null;
    }
    

}
// async function getSearch(search) {
//     const results = await pool.query("SELECT * FROM usernames WHERE username ILIKE '%'||$1||'%' ", [search]);

//     return results.rows;
// }

// async function dropTable(){
//     await pool.query("DROP TABLE usernames");
// }

module.exports = {
    getAllMessages,
    insertMessage,
    getMessageById
    // getSearch,
    // dropTable
};