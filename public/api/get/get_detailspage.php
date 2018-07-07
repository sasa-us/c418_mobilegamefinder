<?php
header('Access-Control-Allow-Origin: *');


// $request = json_decode($_GET);
$request = 'com.rovio.baba';



$query = "SELECT *
FROM `game_ajax_content` 
WHERE `game_id` = '$request'";
$result = mysqli_query($conn, $query);

if(empty($result)) {
    $output['error'][] = mysqli_error($conn);
} else {
    if(mysqli_num_rows($result) > 0) {
        $output['success'] = true;
        while($row = mysqli_fetch_assoc($result)) {
            $output['data'][] = $row;
        }
        
    } else {
        $output['error'][] = 'no result';
    }
}

?>