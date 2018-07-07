<?php
$requested = json_decode($_GET);

$query = "SELECT * ,
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`
    ) AGAINST('$requested')
    FROM
    `game_ajax_content`
    WHERE
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`
    ) AGAINST('$requested')
    ORDER BY
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`
    ) AGAINST('$requested') DESC
    LIMIT 25";


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