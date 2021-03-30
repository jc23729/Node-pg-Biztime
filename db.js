/** Database setup for BizTime. */

const { Client } = require("pg");
//Not sure what this means or what line 6 is reffering to postgresql:///biztime
const client = new Client({
    user: "postgresql",
    host: "localhost",
    database: "biztime",
    password: "soliette",
    port: "5432",
});

client.connect((error)=> {
    if (error){
        return console.error(error);
    }
    return console.log("connection to db success");
});

module.exports = client;