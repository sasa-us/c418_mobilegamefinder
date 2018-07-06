<?php

$query = "SELECT `app_name`, `all_rating`, `description`, `icon_url`, `screenshot_urls`, `price_value`
         FROM `game_ajax_content` 
         WHERE `genres` = 'Action' 
         LIMIT 1";
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