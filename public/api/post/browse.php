<?php
$all_rating = $_POST['all_rating'];
$genre = $_POST['genre']; 
$price_value = $_POST['price_value'];

//browse rating: will send back `all_rating`=5 & 27pc
if($all_rating) {
    $query = "SELECT `genre`, `app_name`, `icon_url`, `game_id`, `all_rating` 
                FROM `combined_game_content` 
                WHERE `all_rating`=5 
                LIMIT 27";
     getBrowseData($conn, $query);
} else if($genre) {
    $query = "";
}



function getBrowseData($conn, $query) {
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
} //end getBrowseData() 




?>