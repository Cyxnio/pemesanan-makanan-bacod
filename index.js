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
  host     : '5.181.216.42',
  user     : 'u1084987_kelompok_1',
  password : 'mjig6myq84',
//  database : 'u1084987_kelompok_1',
  port     : '3306'
});

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
//#endregion - LIST MODULE

app.listen(9000, () => {
  console.log("=================================")
  console.log("BACKEND DIJALANKAN PADA PORT 9000")
  console.log("=================================")
})