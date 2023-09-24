let slider = ["meme6.png","meme3.jpg","meme8.jpg","meme1.jpg","meme2.jpg","meme4.jpg","meme9.jpg"];
let zurg= document.getElementsByTagName('img')[0];
console.log(zurg);
let i=0;
function next(){
	i++;
	zurg.src=slider[i];
	if(i>=slider.length -1){
		i = -1;
	}
}
let play;
function auto(){
	i++;
	zurg.src=slider[i];
	if(i>=slider.length -1){
		i = -1;
	}
	play = setTimeout(auto,1000);
}
function stop(){
	i++;
	zurg.src=slider[i];
	if(i>=slider.length -1){
		i = -1;
	}
	stop=clearTimeout(play);
}