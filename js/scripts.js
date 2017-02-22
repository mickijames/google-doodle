// Store 3 images
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get random number
var max = 3;
var randNum = Math.floor(Math.random() * max);

// Display randomized images
$('#random').attr('src', eval('img' + randNum));