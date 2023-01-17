// 參考資料
// https://www.youtube.com/watch?v=0jjeOYMjmDU&list=RDCMUCvjgXvBlbQiydffZU7m1_aw&index=3
let hu = 0;

function setup() {
	createCanvas(1900, 900);
	colorMode(HSB, 255);
	hu = random(255);
	
}

function draw() {
	stroke((hu + 120+sin(frameCount/60)*120)%255, 200, 255, 100)
	strokeWeight(0.5)
	translate(width/2,height/1.5+sin(frameCount/230)*200)
	branch(100+sin(frameCount/150)*80)
	background(10,10)
}

function branch(len){
	
	line(0,0,0,-len)
	translate(0,-len)
	
	push()
	rotate(PI/12+sin(frameCount/60))
	if(len>4){
  branch(len*0.8)
	}
	pop()
	
	push()
	rotate(-PI/4+cos(frameCount/50))
	if(len>4){
	branch(len*0.6)
	}
	pop()

}

// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
  if (millis() - lapse > 400){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  } 
}