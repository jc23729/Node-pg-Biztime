/** Database setup for BizTime. */

const { Client } = require("pg");
//Not sure what this means or what line 6 is reffering to postgresql:///biztime
const client = new Client({
    connectionString: "postgresql:///biztime"
});

client.connect();

module.exports = client;