<?php

$name = trim($_POST['user_name']); 
$phone = trim($_POST['user_phone']); 
$message = trim($_POST['user_message']); 
$fromMail = 'http://cleanhouse'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'weboksa@yandex.ru'; //Ваша почта
$subject = 'Форма обратной связи http://cleanhouse'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта \n Имя: $name\nТелефон: $phone\Сообщение: $message"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>