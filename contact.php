<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Send email
  $to = "abinav858@gmail.com";
  $subject "New message from $name";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
 echo "Thank you for your message!";
  } else {
    echo "There was a problem sending your message. Please try again.";
  }
}
?>
