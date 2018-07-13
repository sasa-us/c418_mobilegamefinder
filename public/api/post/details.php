<?php

$request = ($_POST['searchrequest']);

$output = [
    'success' => false
];

$query = "SELECT *
    FROM `combined_game_content` 
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

$output_json = json_encode($output);
print($output_json);
?>