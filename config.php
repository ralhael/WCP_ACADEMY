<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "users_db";

$conn = new mysqli($host, $user, $password, $database);

id ($conn->connect_error) {

    die("Connection failed: ". $conn->connect_error);



    }
?>

