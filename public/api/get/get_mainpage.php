<?php

$query = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Action' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query);
// $result = mysqli_query($conn, $query);
// if(empty($result)) {
//     $output['error'][] = mysqli_error($conn);
// } else {
//     if(mysqli_num_rows($result) > 0) {
//         $output['success'] = true;
//         while($row = mysqli_fetch_assoc($result)) {
//             $output['data'][] = $row;
//         }
        
//     } else {
//         $output['error'][] = 'no result';
//     }
// }

 

$query1 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Puzzle'
         ORDER BY RAND()  
         LIMIT 1";
getDB($conn, $query1);

// $result2 = mysqli_query($conn, $query2);
// if(empty($result2)) {
//     $output['error'][] = mysqli_error($conn);
// } else {
//     if(mysqli_num_rows($result2) > 0) {
//         $output['success'] = true;
//         while($row2 = mysqli_fetch_assoc($result2)) {
//             $output['data'][] = $row2;
//         }
        
//     } else {
//         $output['error'][] = 'no result';
//     }
// }

$query2 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value` 
            FROM `game_ajax_content` 
            WHERE `genre` = 'Adventure' 
            ORDER BY RAND() 
            LIMIT 1";
getDB($conn, $query2);

$query3 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Simulation' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query3);

$query4 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Strategy' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query4);

$query5 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Role Playing' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query5);

$query6 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Racing' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query6);

$query7 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Arcade'
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query7);

$query8 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Adventure' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query8);

$query9 = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genre` = 'Board' 
         ORDER BY RAND() 
         LIMIT 1";
getDB($conn, $query9);


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