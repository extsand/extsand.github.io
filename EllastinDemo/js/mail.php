<?php

$recepient = "extsand@gmail.com";
$sitename = "Елластин Кальций";

$name = trim($_POST["yourName"]);
$phone = trim($_POST["yourPhone"]);
$text = trim($_POST["cityDelivery"]);
$message = "Имя: $name \nТелефон: $phone \nГород доставки: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
