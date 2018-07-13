<?php
$genres = array('Action', 'Puzzle', 'Adventure', 'Simulation', 'Strategy', 'Role Playing', 'Racing', 'Arcade', 'Trivia', 'Board');

foreach($genres as $genre) {
    $query = "SELECT gac.id , gac.genre, gac.app_name, gac.icon_url, gac.game_id, gac.content_rating 
                FROM (
                SELECT MIN(gac.id) AS id
                FROM (
                    SELECT CEIL(RAND() * MAX(id)) AS id
                    FROM `combined_game_content` 
                    WHERE genre = '$genre'
                    GROUP BY genre
                ) AS gac_random
                JOIN combined_game_content AS gac ON gac_random.id <= gac.id
                WHERE gac.genre = '$genre'
                GROUP BY gac.genre
                LIMIT 1
                ) AS gac_random
                JOIN combined_game_content AS gac ON gac_random.id = gac.id";
    getDB($conn, $query);
}

// $query = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Action'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Action'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query);

// $query1 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Puzzle'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Puzzle'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query1);


// $query2 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Adventure'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Adventure'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query2);
// $query3 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Simulation'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Simulation'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query3);
// $query4 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Strategy'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Strategy'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query4);
// $query5 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Strategy'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Role Playing'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query5);
// $query6 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Racing'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Racing'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query6);
// $query7 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Arcade'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Arcade'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query7);
// $query8 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Trivia'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Trivia'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query8);
// $query9 = "SELECT gac.*
//     FROM (
//         SELECT MIN(gac.id) AS id
//         FROM (
//             SELECT CEIL(RAND() * MAX(id)) AS id
//             FROM `game_ajax_content` 
//             WHERE genre = 'Board'
//             GROUP BY genre
//         ) AS gac_random
//         JOIN game_ajax_content AS gac ON gac_random.id <= gac.id
//         WHERE gac.genre = 'Board'
//         GROUP BY gac.genre
//         LIMIT 1
//     ) AS gac_random
//     JOIN game_ajax_content AS gac ON gac_random.id = gac.id";
//     getDB($conn, $query9);


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