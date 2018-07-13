<?php
//browse rating: will send back `all_rating`=5 & 27pc
if(isset($_POST['all_rating'])) {
    $query = "SELECT `genre`, `app_name`, `icon_url`, `game_id`, `all_rating` 
                FROM `combined_game_content` 
                WHERE `all_rating`=5 
                ORDER BY RAND()
                LIMIT 27";
     getBrowseData($conn, $query);
} //end if($all_rating)

//==============================  genre  =========================================
else if(isset($_POST['genre'])) {
    // SELECT genre, MAX(all_rating) FROM combined_game_content GROUP BY genre
    $query = "SELECT `genre`, `app_name`, `icon_url`, `game_id`, `all_rating` 
                FROM `combined_game_content`
                WHERE `genre` = '{$_POST['genre']}'
                ORDER BY RAND()
                LIMIT 25";
    getBrowseData($conn, $query);
   
}//end if($genre)

//==============================  price_value  ==================================

else if(isset($_POST['price_value'])) {

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