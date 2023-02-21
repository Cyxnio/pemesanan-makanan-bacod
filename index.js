/* ======================================================
* Oh iya semua komentar bisa dihapus jika memang mengganggu
* Jika ada pertanyaan coba dulu tanya ke mentor masing masing ya
* ======================================================= */

// THIRD PARTY UNTUK EXPRESS
const express = require("express");

// THIRD PARTY UNTUK MYSQL
const mysql = require("mysql");

// THIRD PARTY UNTUK CORS
let cors = require("cors");

// BIKIN VARIABLE app TAPI GLOBAL
app = express();

// SETINGAN KONEKSI MYSQL
// SESUAIKAN DENGAN KONEKSI KALIAN
connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'kelompok1',
  password : 'kelompok1',
 // database : 'u1084987_kelompok_1',
  port     : '3306'
});

// connection = mysql.createConnection({
//   host     : 'sql12.freemysqlhosting.net',
//   user     : 'sql12599979',
//   password : 'kDInpv9VJS',
// //  database : 'sql12599979',
//   port     : '3306'
// });

/*connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
 // database : 'u1084987_kelompok_1',
  port     : '3306'
});*/

app.use(cors());
app.use(express.json());
connection.connect(function(err) {
  if (!err) {
  console.log('Connected to the MySQL server.');
  }
  else if (err)
  {
  return console.error('Timeout: ' + err.message);
  }
  });

//#region - LIST MODULE
//require("./modules/mahasiswa.js");                                                                
require("./modules/menu.js");  
require("./modules/pemesanan.js");                                                              
//#endregion - LIST MODULE

app.listen(9000, () => {
  console.log("=================================")
  console.log("BACKEND DIJALANKAN PADA PORT 9000")
  console.log("=================================")
})