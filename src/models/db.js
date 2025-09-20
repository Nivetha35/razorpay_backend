const mysql = require('mysql2');
const fs = require('fs');

const db = mysql.createConnection({
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
  user: '4SoVMvThsezBmqJ.root', // Use the full username with prefix!
  password: 'FwcWDJtg3fZuksR2',  // Your generated password
  database: 'test',              // Your database name
  port: 4000,
  ssl: {
    minVersion: 'TLSv1.2',
    ca: fs.readFileSync('tidb-ca.pem') // Download CA cert and save as tidb-ca.pem in backend folder
  }
});

module.exports = db;