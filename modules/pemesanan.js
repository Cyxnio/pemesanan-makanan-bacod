app.post("/pesan", (req, res) => {
  let data = {
    nomor_meja: req.body.nomor_meja,
    tanggal_pesan: req.body.tanggal_pesan,
    pesanan: req.body.pesanan,
    nama_pemesan: req.body.nama_pemesan,
    total_pesanan: req.body.total_pesanan,
    no_telepon: req.body.no_telepon,
    note: req.body.note
  }



  let parsed = JSON.parse(data.pesanan);
  parsed.forEach(items => {
    console.log(items.nama);
    let stokAvailable = false;
    connection.query("select nomer from db_kelompok_1.tabel_menu where nomer = ? and stok_makanan = 1", items.nomer, (error, result) => {
    console.log(stokAvailable);
      if (error) {
        res.status(200).json({
        success: false,
        results: "menu yang anda pesan kosong"
        });
        stokAvailable = false;
        console.log(error);
      } else {
        connection.query(`insert into db_kelompok_1.tabel_pemesanan set ?`, data, (errorInsert, resultInsert) => {
          if(errorInsert){
            res.status(500).json({
              success: false,
              results: errorInsert
          });
        } else {
          res.status(200).json({
            success: true,
            results: resultInsert
          });
        }
      });
      }
    })
  });
});