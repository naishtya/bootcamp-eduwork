<?php

include 'koneksi.php';

$nama_produk = $_POST['nama_produk'];
$harga = $_POST['harga'];
$deskripsi = $_POST['deskripsi'];

if ($nama_produk != "" && $harga != "" && $deskripsi != "") {

    $query = "INSERT INTO products (nama_produk, harga, deskripsi)
              VALUES ('$nama_produk', '$harga', '$deskripsi')";

    $simpan = mysqli_query($koneksi, $query);

    if ($simpan) {
        echo "Data produk berhasil disimpan";
    } else {
        echo "Data produk gagal disimpan";
    }

} else {

    echo "Semua field wajib diisi";

}

?>