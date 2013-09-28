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
	//Check left bound
	if(transform.position.x < -29){
		BallBehaviour.playerScore++;
		transform.position.x = 0;
		transform.position.y = 0;
	}
	
	//Check right bound
	if(transform.position.x > 29){
		BallBehaviour.enemyScore++;
		transform.position.x = 0;
		transform.position.y = 0;
	}
}