<?php
header('Access-Control-Allow-Origin: *');

if(empty($_POST['action'])){
	exit('no action specified');
}

require_once('mysql_connect.php');

$output = [
    'success' => false
];

$method = $_SERVER['REQUEST_METHOD'];

switch($_POST['action']) {
    case 'get_mainpage':
		include 'get/get_mainpage.php';
        break;

    case 'get_detailspage':
        include 'get/get_detailspage.php';
        break;

    case 'get_searchpage';
        include 'get/get_searchpage.php';
        break;

    default: 
        $output['error'] ="unknown request method: $method";

}
//find which request front end used
//$method = $_SERVER['REQUEST_METHOD'];//GET

//$action = $_GET['action'];//
//print_r($action);get-mainpage

// switch($method) {
//     case 'GET': 
//           include "get/$action.php";      
//           break;

//     default: 
//           $output['error'] ="unknown request method: $method";
// }

$output_json = json_encode($output);
print($output_json);
?>