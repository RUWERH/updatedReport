<?php
$orgName = $_POST['orgName'];
$location = $_POST['location'];
$contact = $_POST['contact'];
$sys_app = $_POST['sys_app'];
$datedetected = $_POST['datedetected'];

$conn = new mysqli('localhost', 'root', '', 'reports');
if($conn->connect_error){
     die('Connection Failed : '.$conn->connect_error);

    
 } else{
     
    $stmt = $conn->prepare("insert into report(orgName, location, contact, sys_app, datedetected) values (?, ?, ?, ?, ?)");

    $stmt->bind_param("ssssi" , $orgName, $location, $contact, $sys_app, $datedetected);
    $stmt->execute();
    echo " report added succifully.........";
    $stmt->close();
    $conn->close();

    // $query = "SELECT * FROM report";
    // $result = mysqli($connect, $query);
    // $reports_data = '';
    // while ($row = mysqli_fetch_array($result))
    
    // {
    //   $reports_data .= "{ id:'".$row["id"]."', orgName:".$row["orgName"].", location:".$row["location"].", sys_app:".$row["sys_app"]."}, ";
    // }
    
    // $reports_data = subtr ($reports_data, 0, -2)
    
};

?>