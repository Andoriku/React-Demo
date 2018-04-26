<?php

// Import the Postmark Client Class:
require_once('./vendor/autoload.php');
use Postmark\PostmarkClient;

$client = new PostmarkClient("05df5139-f30e-4f46-856f-d8bd13d0c873");

// Send an email:
$sendResult = $client->sendEmail(
  "taradtke@tsrsolutions.com",
  "postmarkapp@tsrsolutions.com",
  "Hello from Postmark!",
  "This is just a friendly 'hello' from your friends at Postmark."
);

?>
