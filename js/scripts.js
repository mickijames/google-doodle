// Store 3 images
var img0 = '../img/castle-w-fireworks.jpg';
var img1 = '../img/classic-castle.jpg';
var img2 = '../img/lilo-&-stitch.jpg';
var img3 = '../img/lion-king.jpg';
var img4 = '../img/mickey-gang.jpg';
var img5 = '../img/monsters-inc.jpg';
var img6 = '../img/mulan.png';
var img7 = '../img/pirates.jpg';
var img8 = '../img/starwars.jpg';
var img9 = '../img/statue-of-walt.jpg';

// Get random number
var max = 10;
var randNum = Math.floor(Math.random() * max);

// Display randomized images
$('.random').attr('src', eval('img' + randNum));

