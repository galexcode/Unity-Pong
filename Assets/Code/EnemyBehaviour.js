#pragma strict

var speed:int = 8;
var ball:GameObject;

function Start () {

}

function Update () {
	//Make enemy track ball
	if(ball.transform.position.y > transform.position.y){
		transform.Translate(Vector3(0, speed, 0) * Time.deltaTime);
	}
	if(ball.transform.position.y < transform.position.y){
		transform.Translate(Vector3(0, -speed, 0) * Time.deltaTime);
	}
	CheckBounds();
}

function CheckBounds(){
	//Top & Bottom bounds
	if(transform.position.y > 12.9){
		transform.position.y = 12.9;
	}
	if(transform.position.y < -12.9){
		transform.position.y = -12.9;
	}	
}