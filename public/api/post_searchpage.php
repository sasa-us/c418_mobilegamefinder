<?php
header('Access-Control-Allow-Origin: *');
require_once('mysql_connect.php');

$contentType = explode(';', $_SERVER['CONTENT_TYPE']);

if (array_search('application/json', $contentType) !== FALSE){
    $request = json_decode(file_get_contents('php://input'), true);
} else {
    $request = $_POST;
}

$request = ($request['searchrequest']);

$output = [
    'success' => false
];

$query = ("SELECT * ,
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`
    ) AGAINST('$request')
    FROM
    `game_ajax_content`
    WHERE
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`
    ) AGAINST('$request')
    ORDER BY
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`
    ) AGAINST('$request') DESC
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