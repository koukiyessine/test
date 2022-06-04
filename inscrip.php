<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$Age = $_POST['Age'];
$Email = $_POST['Email'];
$Comment = $_POST['Comment'];
$Sexe = $_POST['Sex'];

$dbHost = "localhost";
$dbUser = "root";
$dbName = "hello";
$dbpass = "";

$connect = mysqli_connect($dbHost,$dbUser,$dbName,$dbpass);
if (!$connect)
    die("could not connect to data base :'(");

$sql="INSERT INTO user(first_name,last_name,age,email,comments,sex) VALUES ($fname,$lname,$Age,$Email,$Comment,$Sexe)";

$result = mysqli_query($connect,$sql);

if(! $result)
    die("Error");
else
    echo "Your data is added";
?>