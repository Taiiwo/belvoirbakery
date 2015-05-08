<?php
$host = "localhost";
$username = "web";
$password = "bread123";
$database = "bread";
$db = mysqli_connect($host, $username, $password, $database);
$order = json_decode($_POST['data']) or die("Invalid JSON");
foreach ($data as $bread){
  $breadID      = mysqli_real_escape_string($bread['breadID'    ]);
  $quantity     = mysqli_real_escape_string($bread['quantity'   ]);
  $orderDate    = mysqli_real_escape_string($bread['orderDate'  ]);
  $requestDate  = mysqli_real_escape_string($bread['requestDate']);
  $recipient    = mysqli_real_escape_string($bread['recipient'  ]);

  $query = "insert into `orders`
    (`breadID`,   `quantity`,   `orderDate`,  `requestDate`,  `recipient`) values
    ('$breadID',  '$quantity',  '$orderDate', '$requestDate', '$recipient')";
  $db->query($query);
}
?>
