<?php
$myObj->name = $_POST['name'] . "<br>";
$myObj->comment = $_POST['comment'];
$myObj->latitude = $_POST['latitude'];
$myObj->longitude = $_POST['longitude'];
$myObj->coordinate = $_POST['coordinate'];
$myObj->color = $_POST['color'];
$myObj->data = $_POST['data'];
$myObj->line_weight = $_POST['line_weight'];
$myObj->date = date('Y-m-d') . 'T' . date('H:i');

$data = json_encode($myObj);

$name='tear_' . date('d-m-Y-H-i');
$result = file_put_contents('data/' . $name . '.txt', $data, FILE_APPEND | LOCK_EX);
echo "Sucesso " . $result . "\n"
?>
