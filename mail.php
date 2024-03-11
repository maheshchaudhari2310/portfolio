<?php

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$project = htmlspecialchars($_POST['project']);
$message = htmlspecialchars($_POST['message']);


$receiver = "maheshchaudhari842@gmail.com"; //enter that email address where you want to receive all messages
$subject = "From: $name <$email>";
$body = "Name: $name\nEmail: $email\nProject: $project\n\nMessage:\n$message\n\nRegards,\n$name";
$sender = "From: $email";
if(mail($receiver, $subject, $body, $sender)){
    echo "Your message has been sent";
}else{
    echo "Sorry, failed to send your message!";
}
?>