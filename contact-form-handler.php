<?php 
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'chris.uchenna@greig.com';
    $emial_subject = "New Form Submission";
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "info@griegtechnolgies.com";

    $headers = "Form: $email_form \r\n";

    $header .= "Reply-To: $visitor_email\r\n";

    mail($to,$emial_subject,$email_body,$headers);

    header("Location: contact-us.html")
?>