<?php
// Boolean
$active = true;
$count = 44;
$name = 'Joe';

print('Hello, my name is $name!');
print("Hello, my name is $name!");

//Arrays
$numbers = array(3, 5, 7, 1, 14);
$num2 = [4, 5, 6];
print('<br>');
print_r($numbers);
print('<br>');
print_r($num2);
print('<br>');

//stdClass
$user = new stdClass;
$user->name = 'Teddy';
$user->age = '51';
print_r($user);

//command structures
if ($active) {
    print('<br>User is active');
} else {
    print('<br>User is inactive');
}

//loops
for ($i = 0; $i < count($numbers); $i++) {
    print('<br>'.$numbers[$i]);
}

foreach ($user as $key => $value) {
    print('<br>' . $key . ':' . $value);
}

?>