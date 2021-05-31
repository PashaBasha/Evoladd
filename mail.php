<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

header('Content-Type: application/json');

if ($name === ''){
print json_encode(array('message' => 'Введіть ваше імя бек', 'code' => 0));
exit();
}
if ($email === ''){
print json_encode(array('message' => 'Введіть вашу пошту бек', 'code' => 0));
exit();
} 
else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  
    print json_encode(array('message' => 'Пошта введена не коректно бек', 'code' => 0));
    exit();
    }  

 if ($phone === ''){
  print json_encode(array('message' => 'Введіть ваш номер телефону бек', 'code' => 0));
  exit();
 }

//  else if (!preg_match("/^\+380\d{3}\d{2}\d{2}\d{2}$/", $phone) > 0) {
//     print json_encode(array('message' => 'Некоректний номер телефону', 'code' => 0));
//     exit();
//   }



// if ($message === ''){
// print json_encode(array('message' => 'Введіть ваше повідомлення', 'code' => 0));
// exit();
// }

$recipient = "pachabaha@ukr.net";
$headers = 'From: Evolad@meb.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$subject = "Cообщение с сайта Evolad";
$mess = '
    Отправитель: ' . $name . '
    E-mail:' . $email . '
    Телефон:' . $phone . '
    Вопрос: ' . $message;
    

mail($recipient,$subject,$mess,$headers  ) or die("Сталася помилка, спробуйте ще раз");
print json_encode(array('message' => 'Ваш лист успішно надіслано', 'code' => 1));
exit();
?>
