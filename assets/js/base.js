var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.jpg',
	logo1: './assets/images/logo1.png',
	arrow: './assets/images/arrow.png',
	img1: './assets/images/1.jpg',
	fangqi:'./assets/images/fangqi.png',
	get:'./assets/images/get.png',
	concat:'./assets/images/concat.png',
	concat1:'./assets/images/concat1.png',
	mother:'./assets/images/mother.png',
	text:'./assets/images/text.png',
	giveupBg:'./assets/images/fangqi-bg.jpg'
}

var vidoeUrl = './assets/video/1.mp4';

var arr = [];
for (var attr in imgs) {
	arr.push(imgs[attr]);
}


var levels = [
		
	{
		duration:4
	},
	{
		duration:3
	},
	{
		duration:2
	},
	{
		duration:1
	}

];
 
	
var musics = {
	music: {
		src: './assets/music/bg.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
}