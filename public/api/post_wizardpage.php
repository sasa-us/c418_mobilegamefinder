<?php
header('Access-Control-Allow-Origin: *');
require_once('mysql_connect.php');


$price_value = ($_POST['price_value']);
$genre = ($_POST['genre']);
// $platform = ($_POST['platform']);
// commented out b/c we don't have this yet 
// will be added on Monday when inputting new data
// wizard will currently work only w/ the price, genre(s)
//        -- AND `platform` = '$platform'


$output = [
    'success' => false
];

$query = ("SELECT * FROM `game_ajax_content`
        WHERE `price_value` = '$price_value'
        AND `genre` = '$genre'
        LIMIT 25");

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

$output_json = json_encode($output);
print($output_json);
?>