<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php'; // tämä tiedosto haetaan aina kun halutaan yhdistää tietokantaan

$allUsers = mysqli_query($db_conn,"SELECT * FROM `users`"); /* Valitaan tietokannasta kohde "users" */

if(mysqli_num_rows($allUsers) > 0){                         /* Tarkistetaan rivien mäörä kohteesta `users`, jos se on enemmän kuin 0... */
    $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);  /*  noutaa kaikki rivit ja palauttaa tiedot assosiatiivisena taulukkona */

    echo json_encode(["success"=>1,"users"=>$all_users]);   /* ilmoitetaan onnistuminen */
}
else{
    echo json_encode(["success"=>0]);
}