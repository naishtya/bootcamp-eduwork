<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Produk</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">

        <h1>Form Input Produk</h1>

        <form action="simpan.php" method="POST">

            <label>Nama Produk</label>
            <input type="text" name="nama_produk">

            <label>Harga</label>
            <input type="number" name="harga">

            <label>Deskripsi</label>
            <textarea name="deskripsi"></textarea>

            <button type="submit">Simpan Produk</button>

        </form>

    </div>

</body>
</html>