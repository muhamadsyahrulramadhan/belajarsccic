// kita membutuhkan denpedensi
const express = require('express');

const app = express();

// set tampilan mesin untuk nodejs
app.set('view engine', 'ejs');

// set folder statik, agar bisa diakses lewat url
app.use(express.static('public'));

// membuat router untuk "/" dan render file 'index.ejs' ke browser.
// buat variabel untuk halaman web kita
app.get("/", function (request, resolve) {
    var title = "Halaman utama";
    resolve.render("index",{
        title: title
    })
});

app.get("/profile", function (request, resolve) {
    var title = "Halaman profile";
    resolve.render("profile", {
        title: title
    })
});

app.get("/contact", function (request, resolve) {
    var title = "Halaman kontak";
    resolve.render("contact", {
        title: title
    })
});

// nyalakan servernua
app.listen(3000, function () {
    console.log('Server berjalan diport 3000');
});
