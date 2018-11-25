<?php
require ('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail -> isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'info.repeople@mail.ru';
$mail->Password = 'shmakover666witches';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = 'info.repeople@mail.ru';
$mail->FromName = 'REPEOPLE';
$mail->addAddress('Viprepeople@mail.ru', 'REPEOPLE');
$mail->isHtml(true);
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    // echo json_encode(["response" => true]);
    if (!empty($arrRequest)) {
        switch ($arrRequest['form-name']) {
            case 'middle-form':
                $mail->Subject = 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ - разговор с экспертом';
                $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Дата рождения: '.$arrRequest['birthDate'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
            case 'callback-form':
                $mail->Subject = 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ - заказ обратного звонка в шапке';
                $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Дата рождения: '.$arrRequest['birthDate'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
            case 'free-form':
                $mail->Subject = 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ - заказ обратного звонка в подвале';
                $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Дата рождения: '.$arrRequest['birthDate'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
        }
    } else {
        echo json_encode(["response" => false]);
    }
}