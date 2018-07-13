<?php
$genre = $_POST['genre']; 
$platform = $_POST['platform'];
$price_value = $_POST['price_value'];

// print_r($_POST['price_value']);  => paid or free
if(!$genre ) {
   $output['errors'][] = 'no genre provided';
}

if(!$platform ) {
   $output['errors'][] = 'no platform provided';
}

if(!$price_value ) {
   $output['errors'][] = 'no price_value provided';
}

// run the FULL query
// if the FULL query gives 0 rows as a result
// THEN RUN the other way
// NOT if free run one way and if paid another

if(empty($output['error'])) {
    if($price_value == 'free') {
        $query = ("SELECT * FROM `combined_game_content`
        WHERE `price_value` = '$price_value'
        AND `genre` = '$genre'
        AND `platform` = '$platform'
        ORDER BY RAND()
        LIMIT 25");
        getWizardResult($conn, $query);
    }else if($price_value == 'paid') {
        $query2 = ("SELECT * FROM `combined_game_content`
                    WHERE `price_value` <> 'free'
                    AND `genre` = '$genre'
                    AND `platform` = '$platform'
                    ORDER BY RAND()
                    LIMIT 25");
        getWizardResult($conn, $query2);
    }
    
}//end if(empty($output['error']))

function getWizardResult($conn, $query) {
    global $output;
    global $genre;
    global $platform;
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) > 0) {
        $output['success'] = true;
        $output['firstSearch'] = true;
        while($row = mysqli_fetch_assoc($result)) {
            $output['data'][] = $row;
        }
    } else if (mysqli_num_rows($result) === 0){
        $queryAlt = ("SELECT * FROM `combined_game_content`
            AND `genre` = '$genre'
            AND `platform` = '$platform'
            ORDER BY RAND()
            LIMIT 25");
        getWizardAltResult($conn,$queryAlt);
        }
}//end getWizardResult()



    

function getWizardAltResult($conn, $query) {
    global $output;
    $result = mysqli_query($conn, $query);   
    if(mysqli_num_rows($result) > 0) {
        $output['success'] = true;
        $output['firstSearch'] = false;
        while($row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        }
    } 
}//end getWizardResult()

?>