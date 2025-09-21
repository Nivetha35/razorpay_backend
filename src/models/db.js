const mysql = require('mysql2');
const fs = require('fs');

const pool = mysql.createPool({
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
  user: '4SoVMvThsezBmqJ.root',
  password: 'FwcWDJtg3fZuksR2',
  database: 'test',
  port: 4000,
  ssl: {
    minVersion: 'TLSv1.2',
    ca: fs.readFileSync('tidb-ca.pem')
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
