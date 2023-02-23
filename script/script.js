var cart = []
// Get data untuk home page
const getMenu = () => {
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
                    <input onclick="addToCart('${makanan.nama_makanan}', '${makanan.harga_makanan}', '${makanan.foto_makanan}', '${makanan.nomer}')" type="button" class="button" value="+">
                </div>
            </div>
        </div>`
        })
    
        content.innerHTML = cards;
    })
}

const getCart = () => {
    const content = document.querySelector('.list-cart')
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    cart = cartStorage
    let cards = '';
    cartStorage.map((cartItem) => {
        cards += `     <div class="card">
        <div class="detail">
            <h1>${cartItem.nama_makanan}</h1>
            <div class="btn">
                <h3>Rp. ${cartItem.harga_makanan}</h3>
                <input onclick="addToCart('${cartItem.nama_makanan}', '${cartItem.harga_makanan}', '${cartItem.foto_makanan}', '${cartItem.nomer}')" type="button" class="button" value="+">
                <i id="${cartItem.nomer}" type="button" class="button btn-delete" data-feather="trash-2"></i>
                <input id="${cartItem.nomer}" type="button" class="button btn-remove" value="-">
            </div>
        </div>
    </div>`
    })

    content.innerHTML = cards;
    document.querySelectorAll('.btn-delete').forEach(e => {
        e.addEventListener("click", function() {
            deleteCart(e.id)
        })
    })
    
    document.querySelectorAll('.btn-remove').forEach(e => {
        e.addEventListener("click", function() {
            removeCart(e.id)
        })
    })
    
}

const addToCart = (nama, harga, foto, nomer) => {
    let data = {"jumlah" : 1, "nama_makanan" : nama, "harga_makanan" : harga, "foto_makanan" : foto, "nomer" : nomer}
    if(cart.length <= 0){
        cart.push(data)
    } else {
        for (let i = 0; i < cart.length; i++) {

            if(cart[i].nomer == nomer){
                cart[i].jumlah += 1
                break
            }else if(cart[i].nomer != nomer && i == (cart.length-1)) {
                cart.push(data)
                break
            }
        };
    }
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
}


const removeCart = (nomer) => {
    if(cart.length <= 0){
        alert("Keranjang Kosong")
    } else {
        for (let i = 0; i < cart.length; i++) {

            if(cart[i].nomer == nomer){
                if(cart[i].jumlah > 0 ){
                    cart[i].jumlah -= 1
                }else {
                    
                }
                break
            }else if(cart[i].nomer != nomer && i == (cart.length-1)) {
                alert("Item tidak ditemukan")
                break
            }
        };
    }
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart()
}

const deleteCart = (nomer) => {
    if(cart.length <= 0){
        alert("Keranjang Kosong")
    } else {
        for (let i = 0; i < cart.length; i++) {

            if(cart[i].nomer == nomer){
                cart.splice(i, 1)
                break
            }else if(cart[i].nomer != nomer && i == (cart.length-1)) {
                alert("Item tidak ditemukan")
                break
            }
        };
    }
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart()
}



