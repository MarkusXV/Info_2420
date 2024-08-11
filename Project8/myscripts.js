// JavaScript Document

PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/print_Button_1.png"
	PrintButton2.src = "images/print_Button_2.png"
	logo1.src = "images/logo_1.png"
	logo2.src = "images/logo_2.png"
}


var imgArray = new Array(
	'CardinalLg.png',
	'duck.png',
	'HeronLg.png',
	'Owl1Lg.png'
			

);


var titleArray = new Array(
  'Cardinal',
  'Duck',
  'Heron',
  'Owl'

);

var imgPath = "Images/Fullsize/";

function swapImage(imgID) {

  var theImage = document.getElementById('theImage');
  var textDiv = document.getElementById('bottomText');

  var newImg;
  var textTitle;

  newImg = imgArray[imgID];
  theImage.src = imgPath + newImg;

  textTitle=titleArray[imgID];

        textDiv.innerHTML = textTitle;
}

function preloadImages() {		
  for(var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image;
    tmpImg.src = imgPath + imgArray[i];
  }
}
		