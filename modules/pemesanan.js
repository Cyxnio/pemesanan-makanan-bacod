app.get("/pesan", (req, res) => {
  let data = {
    no_meja: req.body.no_meja,
    tanggal_pemesan: req.body.tanggal_pemesan,
    nama_pemesan: req.body.nama_pemesan,
    pesanan: req.body.pesanan,
    jumlah: req.body.jumlah
  }
  data.pesanan = '[{ "nomer": 1, "nama": "nasi goreng", "harga": 15000, "jumlah": 2 }, { "nomer" : 2, "nama": "soto", "harga": 15000, "jumlah": 3 }]';

  let parsed = JSON.parse(data.pesanan);
  parsed.forEach(items => {
    console.log(items.nama);
    let stokAvailable = false;
    connection.query("select nomer from sql12599979.tabel_menu where nomer = ? and stok_makanan = 1", items.nomer, (error, result) => {
    console.log(stokAvailable);
      if (error) {
        // res.status(200).json({
        // success: false,
        // results: "menu yang anda pesan kosong"
        // });
        stokAvailable = false;
        console.log(error);
      } else {
        stokAvailable = true;
        console.log(result);
      }
    })
    console.log(stokAvailable);
    if(stokAvailable) {
      connection.query(`insert into sql12599979.tabel_pemesanan set ?`, data, (error, result) => {
        if(error){
          console.log(error);
      } else {
        console.log(result);
      }
    });
  } else {
    console.log("stok kosong");
  }
  });

  // connection.query("insert into jurusan set ?", data, (error, result) => {
    //   if (error) {
    //     res.status(500).json({
    //       success: false,
    //       results: error
    //     })
    //   } else {
    //     res.status(200).json({
    //       success: true,
    //       results: result
    //     })
    //   }
    // })
});