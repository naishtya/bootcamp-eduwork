<?php

include 'koneksi.php';

$query = "SELECT * FROM products";

$result = mysqli_query($koneksi, $query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Produk</title>

    <style>

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            width: 80%;
            margin: 30px auto;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid black;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #ddd;
        }

    </style>

</head>
<body>

    <div class="container">

        <h1>Data Produk</h1>

        <table>

            <tr>
                <th>ID</th>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Deskripsi</th>
            </tr>

            <?php while($row = mysqli_fetch_assoc($result)) { ?>

            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['nama_produk']; ?></td>
                <td><?php echo $row['harga']; ?></td>
                <td><?php echo $row['deskripsi']; ?></td>
            </tr>

            <?php } ?>

        </table>

    </div>

</body>
</html>