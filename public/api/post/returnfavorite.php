<?php
session_start();

$query = "SELECT `app_name`, `icon_url`, g.`game_id`, `content_rating`, `price_value`, `description`, `all_rating` 
            FROM `user_game` AS `u` 
            JOIN `combined_game_content` AS `g` 
            ON u.game_id = g.game_id";

getDB($conn, $query);

function getDB($conn, $query) {
    $result = mysqli_query($conn, $query);
    global $output;
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
} //end getDB() 

?>