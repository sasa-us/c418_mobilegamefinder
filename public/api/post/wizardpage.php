<?php
$genre = $_POST['genre']; 
$platform = $_POST['platform'];
$price_value = $_POST['price_value'];

if(!$genre ) {
   $output['errors'][] = 'no genre provided';
}

if(!$platform ) {
   $output['errors'][] = 'no platform provided';
}

if(!$price_value ) {
   $output['errors'][] = 'no price_value provided';
}

if(empty($output['error'])) {
    $query = ("SELECT * FROM `game_ajax_content`
        WHERE `price_value` = '$price_value'
        AND `genre` = '$genre'
        -- AND `platform` = '$platform
        ORDER BY RAND()
        LIMIT 25");

        // run original query
        // if original query returns 0 results then run a secondary query without price_value
        // add in $output['firstsearch']=true if original yields results
        // change to false if it does not and a second query had to be run

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
}

?>