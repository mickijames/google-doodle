// Store 3 images
var img0 = '../img/castle-w-fireworks.jpg';
var img1 = '../img/classic-castle.jpg';
var img2 = '../img/lilo-&-stitch.jpg';
var img3 = '../img/lion-king.jpg';
var img4 = '../img/mulan.png';
var img5 = '../img/pirates.jpg';
var img6 = '../img/starwars.jpg';
var img7 = '../img/statue-of-walt.jpg';

// Get random number
var max = 8;
var randNum = Math.floor(Math.random() * max);

// Display randomized images
$('.random').attr('src', eval('img' + randNum));


// Store SVG Points
var google = $('svg').drawsvg({
    duration: 1000,
    stagger: 0
});


$('#stage').hover(
    function () {
        // Animate SVG Points
        google.drawsvg('animate');
        
    }, function () {
        google.fadeOut();
});
