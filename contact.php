<?php

function strip_crlf($string)
{
    return str_replace("\r\n", "", $string);
}

if (! empty($_POST["submit"])) {
    $name = $_POST["Name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $toEmail = "abinav858@gmail.com";
    $name = strip_crlf($name);
    $email = strip_crlf($email);
    if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "The email address is invalid.";
    } else {
        $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
        if (mail($toEmail, $message, $mailHeaders)) {
            $message = "Your contact information is received successfully.";
            $type = "success";
        }
    }
}
require_once "contact.php";
?>