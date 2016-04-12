<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Rellene todos los datos indicados!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'contacto@ruboweb.hol.es'; 
$email_subject = "RuboWeb Contact De:  $name";
$email_body = "Nuevo mensaje procedente del formulario de contacto de la Web.\n\n"."Los detalles del contacto son:\n\nNombre: $name\n\nEmail: $email_address\n\nMensaje:\n$message";
$headers = "From: contacto@ruboweb.hol.es\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>