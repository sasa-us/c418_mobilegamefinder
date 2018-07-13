<?php
//browse rating: will send back `all_rating`=5 & 27pc
if(isset($_POST['all_rating'])) {
    $query = "SELECT `all_rating`, `genre`, `app_name`, `icon_url`, `game_id`
                FROM `combined_game_content` 
                WHERE `all_rating`=5 
                ORDER BY RAND()
                LIMIT 27";
     getBrowseData($conn, $query);
} //end if($all_rating)

//==============================  genre  =========================================
else if(isset($_POST['genre'])) {
    $query = "SELECT `genre`, `app_name`, `icon_url`, `game_id`, `all_rating` 
                FROM `combined_game_content`
                WHERE `genre` = '{$_POST['genre']}'
                ORDER BY RAND()
                LIMIT 27";
    getBrowseData($conn, $query);
   
}//end if($genre)
//==============================  price_value  ==================================
else if(isset($_POST['price_value'])) {
    if($_POST['price_value']=='paid') {
        $query = "SELECT `price_value`, `genre`, `app_name`, `icon_url`, `game_id`, `all_rating` 
                FROM `combined_game_content`
                WHERE `price_value` <> 'free'
                ORDER BY RAND()
                LIMIT 27";
    } else {
        $query = "SELECT `price_value`, `genre`, `app_name`, `icon_url`, `game_id`, `all_rating` 
                FROM `combined_game_content`
                WHERE `price_value` = 'free'
                ORDER BY RAND()
                LIMIT 27";
    }

    getBrowseData($conn, $query);
    
}

//===========

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