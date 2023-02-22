// Get data untuk home page
fetch('http://localhost:9000/menu').then((res) =>  res.json()).then((data) => {
    // console.log(data.results)
    const content = document.querySelector('.list-makanan')
    let makanans = data.results;
    let cards = '';
    makanans.map((makanan) => {
        cards += `     <div class="card">
        <div class="image">
            <img src="${makanan.foto_makanan}" width="200px" alt="">
        </div>
        <div class="detail">
            <h1>${makanan.nama_makanan}</h1>
            <p>deskripsi</p>
            <div class="btn">
                <h3>Rp. ${makanan.harga_makanan}</h3>
                <input type="button" class="button" value="+">
            </div>
        </div>
    </div>`
    })

    content.innerHTML = cards;
})




