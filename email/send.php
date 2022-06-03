<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['ime']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = 'Poruka od posetioca web sajta';
	$to = "office@mjralatnica.com";
	$from = $_POST['email'];
	$name = $_POST['ime'];

	// data

	$msg = $_POST['poruka'];
	$text = $name . ' vam je poslao poruku: ' . $msg;

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $text, $headers);
	}

  else {

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
