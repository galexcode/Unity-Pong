#pragma strict

var speed:int = 10; //Player speed

function Start () {

}

function Update () {
	//Player input
	if(Input.GetButton("UP")){
		transform.Translate(Vector3(0, speed, 0) * Time.deltaTime);
	}
	if(Input.GetButton("DOWN")){
		transform.Translate(Vector3(0, -speed, 0) * Time.deltaTime);
	}
	
	//Top & Bottom bounds
	if(transform.position.y > 12.9){
		transform.position.y = 12.9;
	}
	if(transform.position.y < -12.9){
		transform.position.y = -12.9;
	}	
}