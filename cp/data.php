<?php
$host = "localhost";
$username = "web";
$password = "bread123";
$database = "bread";
$db = mysqli_connect($host, $username, $password, $database);

$retme = [];
$com = $db->real_escape_string($_REQUEST['com']);
if (in_array($com, ['breads', 'orders', 'ingredients'])){
  $query = "select * from $com";
  $response = $db->query($query);
  while ($bread = $response->fetch_assoc()) {
    array_push($retme, $bread);
  }
  echo json_encode($retme);
}
?>
