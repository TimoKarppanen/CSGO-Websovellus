
<!--  Ohjelma jatkuu tästä: Axios kutsun avulla ohjelma ottaa yhteyden tähän tiedostoon -->

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';  // tämä tiedosto haetaan aina kun halutaan yhdistää tietokantaan

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if(isset($data->user_name)
    && isset($data->player_role)  
        &&isset($data->team)
            && !empty(trim($data->user_name))
                && !empty(trim($data->player_role))
                    && !empty(trim($data->team))
  
	){
    $username = mysqli_real_escape_string($db_conn, trim($data->user_name));
    $playerrole = mysqli_real_escape_string($db_conn, trim($data->player_role));
    $playerteam = mysqli_real_escape_string($db_conn, trim($data->team));

         
        $insertUser = mysqli_query($db_conn,"INSERT INTO `users`(`user_name`,`player_role`,`team`) VALUES('$username','$playerrole','$playerteam')");    /* Yhdistetään tietokantaan, lisätään kohde "user_name" kohteeseen "users */
        
        if($insertUser){        /* Jos yhteydenotto onnistui... */

            $last_id = mysqli_insert_id($db_conn);  /* Säilötään yhteyden ID */

           /* echo json_encode(["success"=>1,"msg"=>"User Inserted.","id"=>$last_id]); */
            
            }
                
        }


